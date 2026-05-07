import React from 'react';

interface Integration {
  id: string;
  platform: string;
  logo: string;
  sfPattern: string;
  color: string;
  tagline: string;
  story: string;
  pillars: string[];
  code: string;
}

const integrations: Integration[] = [
  {
    id: 'shopify',
    platform: 'Shopify',
    logo: '/shopify.svg',
    sfPattern: 'Platform Event  →  Apex Trigger Handler',
    color: '#96bf48',
    tagline: 'Inventario en tiempo real. Sin fricción entre canales.',
    story: 'Cada orden procesada en Shopify dispara un webhook que publica un Platform Event en Salesforce. Un trigger suscrito actualiza el inventario en milisegundos, previniendo quiebres de stock en catálogos de más de 10,000 SKUs activos en simultáneo. Sin polling, sin delay, sin inconsistencias.',
    pillars: ['Platform Events', 'Trigger Handler Framework', 'Bulkification', 'Named Credentials'],
    code:
`trigger InventoryEventTrigger on Inventory_Update__e (after insert) {
    new InventoryEventHandler().run(Trigger.new);
}

public class InventoryEventHandler {
    public void run(List<Inventory_Update__e> events) {
        Map<String, Decimal> skuToStock = new Map<String, Decimal>();
        for (Inventory_Update__e evt : events) {
            skuToStock.put(evt.SKU_Code__c, evt.Available_Quantity__c);
        }
        // Bulk-safe: single DML op for the entire event batch
        ProductInventoryService.bulkUpdateStock(skuToStock);
    }
}

// Test con HttpCalloutMock para el webhook inicial
@IsTest
static void testInventoryEventHandler() {
    List<Inventory_Update__e> events = new List<Inventory_Update__e>{
        new Inventory_Update__e(SKU_Code__c = 'SKU-001', Available_Quantity__c = 50)
    };
    Test.startTest();
    EventBus.publish(events);
    Test.stopTest();
    Product2 p = [SELECT Stock__c FROM Product2 WHERE SKU__c = 'SKU-001'];
    System.assertEquals(50, p.Stock__c);
}`,
  },
  {
    id: 'sap',
    platform: 'SAP Business One',
    logo: '/sap-logo.png',
    sfPattern: 'Schedulable  →  Batch Apex  →  HTTP Callout',
    color: '#0070f3',
    tagline: 'ERP y CRM sincronizados. Un único sistema de verdad.',
    story: 'Un Schedulable job configura la ejecución batch cada noche a las 2 AM mediante expresión CRON. El Batch Apex consulta los productos activos y ejecuta callouts al REST layer de SAP Business One en scopes de 200 registros, sincronizando movimientos de bodega sin vulnerar un solo Governor Limit en producción.',
    pillars: ['Schedulable CRON', 'Database.Batchable', 'Database.AllowsCallouts', 'REST API Layer'],
    code:
`public class SAPSyncScheduler implements Schedulable {
    // CRON: '0 0 2 * * ?' — Every night at 2:00 AM
    public void execute(SchedulableContext sc) {
        Database.executeBatch(new SAPInventoryBatch(), 200);
    }
}

public class SAPInventoryBatch
    implements Database.Batchable<SObject>, Database.AllowsCallouts {

    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator([
            SELECT Id, SAP_Product_Code__c, Stock__c, LastModifiedDate
            FROM Product2
            WHERE IsActive = true AND SAP_Sync_Required__c = true
        ]);
    }
    public void execute(Database.BatchableContext bc, List<Product2> scope) {
        // HTTP callout al REST layer de SAP — Named Credential cifrada
        SAPRestService.syncProducts(scope);
    }
    public void finish(Database.BatchableContext bc) {
        // Notifica al canal Slack con resumen del job completado
        SlackAlertService.notifySyncComplete(bc.getJobId());
    }
}`,
  },
  {
    id: 'slack',
    platform: 'Slack',
    logo: '/slack-logo.png',
    sfPattern: 'Apex Trigger  →  Queueable  →  Incoming Webhook',
    color: '#611f69',
    tagline: 'Eventos críticos del negocio. Alertas al instante.',
    story: 'Al cerrar una Oportunidad como "Closed Won", el trigger encola un SlackNotificationQueueable implementando Database.AllowsCallouts. El job ejecuta el HTTP POST al Incoming Webhook de Slack con el contexto completo del deal, sin bloquear la transacción DML principal. El equipo comercial recibe el alert en segundos.',
    pillars: ['Queueable Apex', 'Database.AllowsCallouts', 'Connected App', 'Block Kit Builder'],
    code:
`// Trigger encola el job — no bloquea la transacción DML
trigger OpportunityTrigger on Opportunity (after update) {
    new OpportunityTriggerHandler().run();
}

public class OpportunityTriggerHandler extends TriggerHandler {
    protected override void afterUpdate() {
        List<Id> closedWonIds = new List<Id>();
        for (Opportunity opp : (List<Opportunity>) Trigger.new) {
            Opportunity old = (Opportunity) Trigger.oldMap.get(opp.Id);
            if (opp.StageName == 'Closed Won' && old.StageName != 'Closed Won') {
                closedWonIds.add(opp.Id);
            }
        }
        for (Id oppId : closedWonIds) {
            System.enqueueJob(new SlackNotificationQueueable(oppId));
        }
    }
}

public class SlackNotificationQueueable
    implements Queueable, Database.AllowsCallouts {

    private final Id opportunityId;
    public SlackNotificationQueueable(Id oppId) { this.opportunityId = oppId; }

    public void execute(QueueableContext ctx) {
        Opportunity opp = [
            SELECT Name, Amount, Owner.Name, Account.Name
            FROM Opportunity WHERE Id = :opportunityId LIMIT 1
        ];
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:Slack_Webhook_Sales');
        req.setMethod('POST');
        req.setBody(JSON.serialize(new Map<String, Object>{
            'text' => 'Closed Won: ' + opp.Name + ' — $' + opp.Amount,
            'blocks' => SlackBlockKit.buildDealCard(opp)
        }));
        new Http().send(req);
    }
}`,
  },
];

const Architecture = () => (
  <section className="py-24 bg-white border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-[10px] font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 font-mono flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-brand-teal/40" />
          Integraciones Reales
          <span className="w-8 h-[1px] bg-brand-teal/40" />
        </p>
        <h2 className="text-4xl lg:text-5xl text-brand-black font-extrabold tracking-tight mb-6 leading-tight">
          Arquitectura que conecta{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#00a1e0]">
            el mundo real
          </span>{' '}
          con Salesforce.
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Tres integraciones de producción. Tres patrones de ingeniería distintos. Así se ve el ecosistema cuando está bien construido.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {integrations.map((intg) => (
          <div
            key={intg.id}
            className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[3px] w-full" style={{ backgroundColor: intg.color }} />

            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: story */}
              <div className="p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-100 bg-white">
                <div>
                  {/* Platform → Salesforce flow pill */}
                  <div className="flex items-center gap-2 flex-wrap mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <img src={intg.logo} alt={intg.platform} className="h-5 w-auto object-contain" />
                      <span className="text-[11px] font-bold text-slate-700">{intg.platform}</span>
                    </div>
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                      <img src="/salesforce-logo.png" alt="Salesforce" className="h-5 w-auto object-contain" />
                      <span className="text-[11px] font-bold text-slate-700">Salesforce</span>
                    </div>
                  </div>

                  <p
                    className="text-[10px] font-mono font-bold tracking-widest uppercase mb-3"
                    style={{ color: intg.color }}
                  >
                    {intg.sfPattern}
                  </p>

                  <h3 className="text-xl font-extrabold text-brand-black mb-4 leading-tight">
                    {intg.tagline}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {intg.story}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {intg.pillars.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold border"
                      style={{
                        color: intg.color,
                        borderColor: `${intg.color}35`,
                        backgroundColor: `${intg.color}08`,
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: code terminal */}
              <div className="bg-slate-950 flex flex-col">
                <div className="flex items-center gap-1.5 px-6 pt-5 pb-4 border-b border-slate-800">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-[10px] font-mono text-slate-500 tracking-wider">apex — production</span>
                  <span
                    className="ml-auto text-[9px] font-mono font-bold px-2 py-0.5 rounded"
                    style={{ color: intg.color, backgroundColor: `${intg.color}18` }}
                  >
                    {intg.id.toUpperCase()}
                  </span>
                </div>
                <div className="p-6 lg:p-8 overflow-x-auto flex-1">
                  <pre className="text-[12.5px] font-mono text-slate-300 leading-[1.7] whitespace-pre">
                    <code>{intg.code}</code>
                  </pre>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Architecture;

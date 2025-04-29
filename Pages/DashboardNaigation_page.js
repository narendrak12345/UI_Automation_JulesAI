
const { Page } = require('@playwright/test');

class DashboardNaigationpage {
  /**
   * @param {Page} page
   */
  constructor(page) {
    this.page = page;
    this.suppliercustomersDashboard = page.locator('//*[@data-testid="LibraryBooksIcon"]');
    this.SuppliersandSites = page.locator('//*[text()="Suppliers & Sites"]');
    this.Suppliersandcustomers = page.locator('//*[text()="Customers & Sites"]');
    this.SuppliersAndContacts = page.locator('//*[text()="Contacts"]');
    this.supplierNewsupplier=page.locator('//*[text()="Add a new supplier"]')
    this.suppliernewCustomer=page.locator('//*[text()="Add a new customer"]')
    this.supplierNewContact=page.locator('//*[text()="Add a new contact"]')
    this.purchasedashboard=page.locator('//*[@data-testid="ShoppingCartIcon"]')
    this.purchasesTrading=page.locator('//*[text()="Purchases(Trading)"]');
    this.purchasesRecycling=page.locator('//*[text()="Purchases(Recycling)"]');
    this.ContractsAndServices=page.locator('//*[text()="Contracts & Services"]');
    this.Offers=page.locator('//*[text()="Offers"');
    this.SourcingHub=page.locator('//*[text()="Sourcing ub"]');
    this.purchasesGoals=page.locator('//*[text()="Purchases goals"]');
    this.purchasessummary=page.locator('//*[text()="Summary"]');
    this.purchasesAddapurchase=page.locator('//*[text()="Add a purchase"]');
    this.purchasesNewoffer=page.locator('//*[text()="New offer"]');
    this.purchasesoffer=page.locator('//*[text()="Manage sale prices"]');
    this.purchasePricelist=page.locator('//*[text()="Price list"]');
    this.purchaseGoals=page.locator('//*[text()="Create a goal"]');
    this.Logisticsdashboard=page.locator('//*[@data-testid="HeadsetMicIcon"]')
    this.booking=page.locator('//*[text()="Bookings"]');
    this.Salesdashboard=page.locator('//*[@data-testid="LocalOfferIcon"]')
    this.sales=page.locator('//a[text()="Sales"]');
    this.addaSales=page.locator('//*[text()="Add a sale"]');
    this.inventorydashboard=page.locator('//*[@data-testid="WarehouseIcon"]')
    this.InbondLoads=page.locator('//*[text()="Inbond loads"]');
    this.Totalinbond=page.locator('//*[text()="Total in inbound"]');
    this.stocks=page.locator('//*[text()="Stocks"]');
    this.Totalinstcok=page.locator('//*[text()="Total in stcok"]');
    this.outbondLoads=page.locator('//*[text()="Outbound loads"]');
    this.totaloutbondloads=page.locator('//*[text()="Outbound loads"]');
    this.riskmanagementdashboard=page.locator('//*[@data-testid="VerifiedUserIcon"]')
    this.hedgingcontracts=page.locator('//*[text()="Hedging contracts"]');
    this.positionreport=page.locator('//*[text()="Position report"]');
    this.Overallposition=page.locator('//*[text()="Overall position"]');
    this.planningBooking=page.locator('//*[text()="Planning/Booking"]');
    this.LoadsHolds=page.locator('//*[text()="Loads/Holds"]')
    this.shipments=page.locator('//*[text()="Shipments"]')
    this.Bookings=page.locator('//*[text()="Bookings"]')
    this.Shipmenttracking=page.locator('//*[text()="Shipment tracking"]')
    this.logisticsratesdashboard=page.locator('//*[@data-testid="LocalShippingIcon"]')
    this.Ratemanagement=page.locator('//*[text()="Rate management"]')
    this.Rateexplorer=page.locator('//*[text()="Rate explorer"]')
    this.Ratemanagementexport=page.locator('//*[text()="Rate management - Export"]')
    this.Rateexplorerexport=page.locator('//*[text()="Rate explorer - Export"]')

  }

  async Mouse_hover_On_Dashboard(){
    await this.suppliercustomersDashboard.hover()

  }
  async Mouse_hover_On_Purchases(){
    await this.purchasedashboard.hover()

  }
  async Naviagte_To_Suppliers_And_Sites(){

    await this.SuppliersandSites.waitFor({state:'visible'});
    await this.SuppliersandSites.click()
    await this.supplierNewsupplier.waitFor({state:'visible'});

  }
  async Naviagte_To_Customers_And_Sites(){

    await this.Suppliersandcustomers.waitFor({state:'visible'});
    await this.Suppliersandcustomers.click()
    await this.suppliernewCustomer.waitFor({state:'visible'});

  }
  async Naviagte_To_Contacts(){

    await this.SuppliersAndContacts.waitFor({state:'visible'});
    await this.SuppliersAndContacts.click()
    await this.supplierNewContact.waitFor({state:'visible'});

  }
  async Naviagte_To_Puchases_Trading(){

    await this.purchasedashboard.click()
    await this.purchasesTrading.waitFor({state:'visible'});
    await this.purchasesTrading.click()
    await this.purchasessummary.waitFor({state:'visible'});

  }
  async Naviagte_To_Puchases_Recycling(){

    await this.purchasedashboard.hover()
    await this.purchasesRecycling.waitFor({state:'visible'});
    await this.purchasesRecycling.click()
    await this.purchasesAddapurchase.waitFor({state:'visible'});

  }
  async Naviagte_To_headphone(){
    await this.headphone.hover()
    await this.booking.waitFor({state:'visible'});
    await this.booking.click()

  }
  async Naviagte_To_Sales(){
    await this.Salesdashboard.hover()
    await this.sales.waitFor({state:'visible'});
    await this.sales.click()
    await this.addaSales.waitFor({state:'visible'});

  }
  async Naviagte_To_Inventory(){
    await this.inventorydashboard.hover()
    await this.InbondLoads.waitFor({state:'visible'});
    await this.InbondLoads.click()
    await this.Totalinbond.waitFor({state:'visible'});
  }
  async Naviagte_To_Riskmanagement_hedgingcontracts(){
    await this.riskmanagementdashboard.hover()
    await this.hedgingcontracts.waitFor({state:'visible'});
    await this.hedgingcontracts.click()
    await this.hedgingcontracts.waitFor({state:'visible'});
  }

  async Naviagte_To_Riskmanagemnt_position_report(){
    await this.riskmanagementdashboard.hover()
    await this.positionreport.waitFor({state:'visible'});
    await this.positionreport.click()
    await this.Overallposition.waitFor({state:'visible'});
  }

  async Naviagte_To_logistics_PlanningBooking(){
    await this.Logisticsdashboard.hover()
    await this.planningBooking.waitFor({state:'visible'});
    await this.planningBooking.click()

  }
  async Naviagte_To_logistics_LoadsandHolds(){
    await this.Logisticsdashboard.hover()
    await this.LoadsHolds.waitFor({state:'visible'});
    await this.LoadsHolds.click()

  }
  async Naviagte_To_logistics_Shipments(){
    await this.Logisticsdashboard.hover()
    await this.shipments.waitFor({state:'visible'});
    await this.shipments.click()

  }
  async Naviagte_To_logistics_Shipments(){
    await this.Logisticsdashboard.hover()
    await this.shipments.waitFor({state:'visible'});
    await this.shipments.click()

  }
  async Naviagte_To_logistics_Shipments(){
    await this.Logisticsdashboard.hover()
    await this.shipments.waitFor({state:'visible'});
    await this.shipments.click()

  }
  async Naviagte_To_logistics_Bookings(){
    await this.Logisticsdashboard.hover()
    await this.Bookings.waitFor({state:'visible'});
    await this.Bookings.click()

  }
  async Naviagte_To_logistics_shipmentTracking(){
    await this.Logisticsdashboard.hover()
    await this.Shipmenttracking.waitFor({state:'visible'});
    await this.Shipmenttracking.click()

  }
  async Naviagte_To_logisticsrates_Rate_management(){
    await this.logisticsratesdashboard.hover()
    await this.Ratemanagement.first().waitFor({state:'visible'});
    await this.Ratemanagement.first().click()

  }
  async Naviagte_To_logisticsrates_Rate_Explorer(){
    await this.logisticsratesdashboard.hover()
    await this.Rateexplorer.first().waitFor({state:'visible'});
    await this.Rateexplorer.first().click()

  }

}
module.exports = { DashboardNaigationpage };
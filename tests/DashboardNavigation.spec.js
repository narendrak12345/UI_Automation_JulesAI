
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/Login_page');
const{DashboardNaigationpage}=require('../Pages/DashboardNaigation_page')
const testdata=require('../Testdata/testData.json')


test.describe('Automate navigation to different sections post-login',()=>{


      test.beforeEach('Excute before test',async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login(testdata[0].email,testdata[0].password);
      await expect(login.loginconfirmdemopage).toContainText("Demo");
    
    });
    test('Verify navigations for suppliers and customers', async ({ page }) => {
      const dashboard = new DashboardNaigationpage(page);
      await dashboard.Mouse_hover_On_Dashboard()
      await dashboard.Naviagte_To_Suppliers_And_Sites();
      await expect(dashboard.supplierNewsupplier).toContainText("Add a new supplier");
      await dashboard.Mouse_hover_On_Dashboard()
      await dashboard.Naviagte_To_Customers_And_Sites();
      await expect(dashboard.suppliernewCustomer).toContainText("Add a new customer");
      await dashboard.Mouse_hover_On_Dashboard()
      await dashboard.Naviagte_To_Contacts()
      await expect(dashboard.supplierNewContact).toContainText("Add a new contact");
      
    });
    test('Verify navigations for purchases', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_Puchases_Trading()
        await expect(dashboard.purchasessummary).toContainText("Summary");
        await dashboard.Naviagte_To_Puchases_Recycling()
        await expect(dashboard.purchasesAddapurchase).toContainText("Add a purchase");
        await dashboard.Naviagte_To_headphone()

      });

      test('Verify navigations for sales', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_Sales()
        await expect(dashboard.addaSales).toContainText("Add a sale");

      });
      test('Verify navigations for Inventory', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_Inventory()
        await expect(dashboard.Totalinbond).toContainText("Total in inbound");

      });
  

      test('Verify navigations for Riskmanagement', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_Riskmanagement_hedgingcontracts()
        await expect(dashboard.hedgingcontracts).toContainText("Hedging contracts");
        await dashboard.Naviagte_To_Riskmanagemnt_position_report()
        await expect(dashboard.Overallposition).toContainText("Overall position")
      });
      test('Verify navigations for logistics', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_logistics_PlanningBooking()
        await expect(dashboard.planningBooking).toContainText("Planning/Booking");
        await dashboard.Naviagte_To_logistics_LoadsandHolds()
        await expect(dashboard.LoadsHolds).toContainText("Loads/Holds");
        await dashboard.Naviagte_To_logistics_Bookings()
        await expect(dashboard.Bookings).toContainText("Bookings");
        await dashboard.Naviagte_To_logistics_Shipments()
        await expect(dashboard.shipments).toContainText("Shipments");
        await dashboard.Naviagte_To_logistics_shipmentTracking()
        await expect(dashboard.Shipmenttracking).toContainText("Shipment tracking");

      });
      test('Verify navigations for logistics rate management', async ({ page }) => {
        const dashboard = new DashboardNaigationpage(page);
        await dashboard.Naviagte_To_logisticsrates_Rate_management()
        await expect(dashboard.Ratemanagementexport).toContainText("Rate management - Export")
        await dashboard.Naviagte_To_logisticsrates_Rate_Explorer()
        await expect(dashboard.Rateexplorerexport).toContainText("Rate explorer - Export")
        
      });
  });
  
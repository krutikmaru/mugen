import {
  faBoxOpen,
  faBusinessTime,
  faEnvelope,
  faFileInvoice,
  // faHeartPulse,
  faIndustry,
  faLightbulb,
  faListCheck,
  faMoneyCheck,
  faSchool,
  faServer,
  faShip,
  faStore,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import manufacture from "../assets/Manufacturing.svg";
import retail from "../assets/Retail.svg";
import logistics from "../assets/Logistics.svg";
import services from "../assets/Services.svg";
import general from "../assets/General.svg";
//Main Content Icons
import acccounting from "../assets/mainContentIcons/Accounting.svg";
import asset from "../assets/mainContentIcons/Asset.svg";
import calendarEvent from "../assets/mainContentIcons/CalendarEvents.svg";
import eCommerce from "../assets/mainContentIcons/eCommerce.svg";
import eLearning from "../assets/mainContentIcons/ELearning.svg";
import freight from "../assets/mainContentIcons/Freight.svg";
import hcm from "../assets/mainContentIcons/HCM.svg";
import manufacturing from "../assets/mainContentIcons/Manufacturing.svg";
import pointOfSale from "../assets/mainContentIcons/PointOfSale.svg";
import projectManagement from "../assets/mainContentIcons/ProjectManagement.svg";
import purchase from "../assets/mainContentIcons/Purchase.svg";
import quality from "../assets/mainContentIcons/Quality.svg";
import sales from "../assets/mainContentIcons/Sales.svg";
import tracability from "../assets/mainContentIcons/Tracability.svg";
import vendorManagement from "../assets/mainContentIcons/VendorManagement.svg";
import warehouse from "../assets/mainContentIcons/Warehouse.svg";
import website from "../assets/mainContentIcons/Website.svg";
import payment from "../assets/mainContentIcons/Payment.svg";
import reporting from "../assets/mainContentIcons/Reporting.svg";
import engineering from "../assets/mainContentIcons/Engineering.svg";
import supply from "../assets/mainContentIcons/Supply.svg";
import compliance from "../assets/mainContentIcons/Compliance.svg";
import accounting from "../assets/mainContentIcons/Accounting.svg";
import freightOperations from "../assets/mainContentIcons/freightOperations.svg";
import customsOperation from "../assets/mainContentIcons/customOperations.svg";
import AdvanceProcurement from "../assets/mainContentIcons/AdvanceProcurement.svg";
import Costing from "../assets/mainContentIcons/Costing.svg";
import FixedAssets from "../assets/mainContentIcons/FixedAssets.svg";
import Inventory from "../assets/mainContentIcons/Inventory.svg";
import LifeCycle from "../assets/mainContentIcons/LifeCycle.svg";
import Marketing from "../assets/mainContentIcons/Marketing.svg";
import payments from "../assets/mainContentIcons/payments.svg";
import Payroll from "../assets/mainContentIcons/Payroll.svg";
import Procurement from "../assets/mainContentIcons/Procurement.svg";
import SalesManagement from "../assets/mainContentIcons/SalesManagement.svg";
import vendorManagement2 from "../assets/mainContentIcons/vendorManagement (2).svg";
import vendorPortal from "../assets/mainContentIcons/vendorPortal.svg";

//Unique modules

const ecomObj = {
  icon: eCommerce,
  title: "E-Commerce",
  overview:
    "Manage your online store with ease. Manage inventory, generate invoices, track sales",
  modules: ["Sales", "CRM", "Inventory", "Accounting", "Website"],
  details: [
    {
      icon: freight,
      title: "E-Commerce",
      description:
        "Discounts, Promotions, Loyalty, Customer Management, Inventory Management, Sales Management, Payments, & Wallet Management",
    },
    {
      icon: payment,
      title: "Payment & Integrations",
      description:
        "Paypal, Stripe, Razorpay, Paytm, Google Pay, Apple Pay, & More",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const manufacturingObj = {
  icon: manufacturing,
  title: "Manufacturing (MRP)",
  overview:
    "Get a 360° view of your manufacturing operations. Manage your production, track your inventory, generate reports",
  modules: [
    "Sales",
    "Purchase",
    "HCM & Payrole",
    "Project",
    "Inventory",
    "Accounting",
    "Calendar",
  ],
  details: [
    {
      icon: engineering,
      title: "Engineering & Planning",
      description:
        "PLM, MPS, BOM, Work Orders, Production Scheduling, Routing, Timesheets, Quality Control, Costing, Downtime",
    },
    {
      icon: supply,
      title: "Supply Chain",
      description: "Manage Inventory, Bills, Lead Times, Purchase Rules",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const tracabilityObj = {
  icon: tracability,
  title: "Tracability",
  overview:
    "Track your products from raw materials to finished goods. Manage your inventory Product Recalls",
  modules: [
    "Sales",
    "Purchase",
    "Inventory",
    "Accounting",
    "Calendar",
    "Quality",
  ],
  details: [
    {
      icon: tracability,
      title: "Track & trace",
      description:
        "Barcodes, QR Codes, 2D Matrix Codes, Serial Number, Batch Number, Lot Number, Expiry, Chain Of Custody",
    },
    {
      icon: compliance,
      title: "Compliance And Governance",
      description:
        "Manage Recalls, Quarantine, Sync With Governance Portals. Track Defective Items By Batch/Party",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const accountingObj = {
  icon: acccounting,
  title: "Accounting",
  overview: "Accounting, Invoicing, Payments, Bank Reconciliation",
  modules: [
    "Sales",
    "Purchase",
    "HCM & Payroll",
    "Project",
    "Inventory",
    "Calendar",
    "Manufacturing",
  ],
  details: [
    {
      icon: accounting,
      title: "360 Accounting",
      description:
        "Chart Of Accounts, Cost Centers, General Ledger, Accounts Payable, Accounts Receivable, Bank Reconciliation",
    },
    {
      icon: compliance,
      title: "Compliance And Governance",
      description:
        "GST, TDS, TCS, VAT, Excise, Customs, Audit Reports, Budget, Automated SOA",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const assetObj = {
  icon: asset,
  title: "Asset",
  overview: "Manage your assets with ease. Track depreciation, maintenance",
  modules: [
    "Purchase",
    "HCM & Payroll",
    "Project",
    "Inventory",
    "Calendar",
    "Accounting",
  ],
  details: [
    {
      icon: FixedAssets,
      title: "Fixed Assets Management",
      description:
        "Manage Property, Plant, And Equipment. Track Depreciation, Maintenance",
    },
    {
      icon: LifeCycle,
      title: "Lifecycle & Maintenance",
      description: "Change Management, Asset Lifecycle, Asset Maintenance",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const hcmOjb = {
  icon: hcm,
  title: "HCM & Payroll",
  overview:
    "360° HR Management. From recruitment to separation. Manage your employees with ease.",
  modules: [
    "Sales",
    "Project",
    "Asset",
    "Calendar",
    "Accounting",
    "Manufacturing",
  ],
  details: [
    {
      icon: hcm,
      title: "Human Capital Management",
      description:
        "Recruitment Employee Lifecycle Management, Leave Management, Attendance Management, Appraisals",
    },
    {
      icon: Payroll,
      title: "Payroll & Expenses",
      description:
        "Manage Your Payroll With Ease. Track Your Employees' Expenses, Generate Reports",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const warehouseObj = {
  icon: warehouse,
  title: "Inventory & Warehouse",
  overview:
    "360° Inventory Management and WMS. Manage forecasts, lead times, and stock balances",
  modules: [
    "Sales",
    "Purchase",
    "Asset",
    "Project",
    "Calendar",
    "Accounting",
    "Manufacturing",
  ],
  details: [
    {
      icon: hcm,
      title: "Stock Operations",
      description:
        "Auto Re-Order, Stock Level Alerts, Batching, Serialization, Variants, Bundling, Multiple Price Lists, Aging & Movement Trackers",
    },
    {
      icon: Payroll,
      title: "Advance Operation",
      description:
        "Cross Docking, Drop Shipping, Putaway, Picking, Packing, Shipping, Receiving, Inventory Valuation",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const projectObj = {
  icon: projectManagement,
  title: "Project Management",
  overview:
    "Dynamic project management with costing, activities and timesheets",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Website",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Quality",
    "Calendar",
  ],
  details: [
    {
      icon: projectManagement,
      title: "Project Management",
      description:
        "Organize, Schedule And Plan Projects. Generate Tasks From Projects And Assign Them To Users.",
    },
    {
      icon: Costing,
      title: "Costing & Profitability",
      description:
        "Track Project Costs And Generate Invoices. Analyze Costs By Project, Task, Or Employee.",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const purchaseObj = {
  icon: purchase,
  title: "Purchase",
  overview:
    "From procurement planing to invoice generation, stock booking and vendor management in one screen.",
  modules: [
    "Sales",
    "Inventory",
    "Accounting",
    "Manufacturing",
    "Asset",
    "Calendar",
    "Project",
  ],
  details: [
    {
      icon: Procurement,
      title: "Procurement",
      description:
        "Generate RFQs, Purchase Orders, And Track Deliveries. Manage Your Vendors And Generate Invoices.",
    },
    {
      icon: AdvanceProcurement,
      title: "Advance Procurement",
      description:
        "Purchase Agreements, Purchase Contracts,Purchase Analysis, Purchase Alerts, Purchase KPIs Etc. Pricing And Shipping Rules",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const saleObj = {
  icon: sales,
  title: "Sales",
  overview:
    "Manage your sales with ease. Track your sales pipeline, quotations, orders, and invoices",
  modules: [
    "CRM",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "Asset",
    "Calendar",
    "Project",
  ],
  details: [
    {
      icon: SalesManagement,
      title: "Sales Management",
      description:
        "Manage Your Sales Pipeline, Quotations, Orders, And Invoices. Track Your Sales Team's Performance.",
    },
    {
      icon: AdvanceProcurement,
      title: "Advanced Feature",
      description:
        "Employee And Partner Commissions, Forecasting, Sales Analysis, Sales Alerts, Sales KPIs, Pricing And Shipping Rules",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const websiteObj = {
  icon: website,
  title: "Website",
  overview:
    "Create your own website and Integrate with Google Ads, Facebook, Instagram, Motamo and more.",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Calendar",
  ],
  details: [
    {
      icon: website,
      title: "Website builder",
      description:
        "Create Your Own Website With Our Built In Website Builder. No Coding Skills Required.",
    },
    {
      icon: sales,
      title: "E-Commerce",
      description:
        "Sell Your Products Online. Manage Your Inventory, Orders, And Payments.",
    },
    {
      icon: Marketing,
      title: "Marketing",
      description:
        "Integrate With Google Ads, Facebook, Instagram, Motamo And More. Generate Leads And Sales.",
    },
  ],
};

const eLearningObj = {
  icon: eLearning,
  title: "ELearning",
  overview:
    "Create and manage your online training content for your team. Track your progress and generate certificates and accumulate points.",
  modules: ["HCM"],
  details: [
    {
      icon: eLearning,
      title: "ELearning",
      description:
        "Create And Manage Your Online Training Content For Your Team. Track Your Progress And Generate Certificates And Accumulate Points.",
    },
    {
      icon: AdvanceProcurement,
      title: "Advanced Features",
      description:
        "Analysis, Alerts, KPIs, Certificates, Points, Quizzes And Surveys",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const calendarObj = {
  icon: calendarEvent,
  title: "Calendar Events",
  overview:
    "Manage your calendar events and meetings, scheduled and assigned tasks, todos. Track your team's availability and schedule meetings.",
  modules: [
    "Sales",
    "CRM",
    "Inventory",
    "Accounting",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
  ],
  details: [
    {
      icon: calendarEvent,
      title: "Calendar",
      description:
        "Manage Your Calendar Events And Meetings, Scheduled And Assigned Tasks, Todos. Track Your Team's Availability And Schedule Meetings.",
    },
    {
      icon: AdvanceProcurement,
      title: "Advanced Features",
      description: "SMS/Email Reminders, Sync With Google Calendar And More",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const qualityObj = {
  icon: quality,
  title: "Quality",
  overview:
    "Manage your quality control process. Track your quality issues and generate reports.",
  modules: [
    "Sales",
    "Inventory",
    "Accounting",
    "Purchase",
    "Manufacturing",
    "HCM",
    "Asset",
    "Service",
    "Calendar",
  ],
  details: [
    {
      icon: quality,
      title: "Quality Control",
      description: "Meetings, SOP , Goals, Actions, Review, NCR , Feedback",
    },
    {
      icon: AdvanceProcurement,
      title: "Advanced Features",
      description: "Analysis, Alerts, KPIs, Points",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const freightObj = {
  icon: freight,
  title: "Freight",
  overview:
    "Manage your freight operations with ease. Track shipments, generate invoices, manage customs",
  modules: [
    "Sales",
    "Purchase",
    "Manufacturing",
    "Inventory",
    "Accounting",
    "Calendar",
  ],
  details: [
    {
      title: "Freight Operations",
      description:
        "FTL/LTL, Agent, Consignee, Carrier/Transporter, Trucking/Shipping/Air Freight, Logistics, Warehousing, Freight Forwarding & Container management",
      icon: freightOperations,
    },
    {
      title: "Customs Operations",
      description:
        "Customs Clearance, documentation, certification, Import, Export, & Customs management",
      icon: customsOperation,
    },
    {
      title: "Reporting",
      description:
        "Real-time dashboards, reports, alerts, KPIs available across platforms",
      icon: reporting,
    },
  ],
};

const pointOfSaleObj = {
  icon: pointOfSale,
  title: "Point Of Sale",
  overview:
    "Use our Integrated Point of Sale system to manage your retail operations. Manage inventory, generate invoices, Van sales",
  modules: ["Sales", "CRM", "Inventory", "Accounting"],
  details: [
    {
      icon: payments,
      title: "Point Of Sale",
      description:
        "Discounts, Promotions, Loyalty, Customer Management, Inventory Management, Sales Management, Payments, & Wallet Management",
    },
    {
      icon: Inventory,
      title: "Inventory Management",
      description:
        "Manage Your Inventory. Track Stock, Generate Purchase Orders, Manage Vendors",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const vendorObj = {
  icon: vendorManagement,
  title: "Vendor Management",
  overview:
    "Manage your vendors with ease. Manage payments, balances, statements, orders",
  modules: ["Accounting", "Purchase", "Inventory", "Calendar", "Manufacturing"],
  details: [
    {
      icon: vendorManagement2,
      title: "Vendor Management",
      description:
        "Vendor Management, Payments, Balances, Statements, Orders, & Invoices, Scoring And Blacklisting",
    },
    {
      icon: vendorPortal,
      title: "Vendor Portal",
      description:
        "Portal With 2fa, OTP, And Other Security Features For Vendors To Manage Their Own Accounts, Orders, And Invoices",
    },
    {
      icon: reporting,
      title: "Reporting",
      description:
        "Real-Time Dashboards, Reports, Alerts, KPIs Available Across Platforms",
    },
  ],
};

const data = {
  optionsStore: [
    {
      id: "Option-1",
      icon: faIndustry,
      previewIcon: manufacture,
      title: "Manufacturing",
      mainContent: [
        ecomObj,
        //Manufacturing
        manufacturingObj,
        //Tracability
        tracabilityObj,
        //Accounting
        accountingObj,
        //Asset
        assetObj,
        //HCM & Payroll
        hcmOjb,
        warehouseObj,
        projectObj,
        purchaseObj,
        saleObj,
        websiteObj,
        eLearningObj,
        calendarObj,
        qualityObj,
      ],
    },
    {
      id: "Option-2",
      icon: faStore,
      previewIcon: retail,
      title: "Retail",
      mainContent: [
        freightObj,
        pointOfSaleObj,
        ecomObj,
        vendorObj,
        accountingObj,
        assetObj,
        hcmOjb,
        warehouseObj,
        projectObj,
        purchaseObj,
        saleObj,
        websiteObj,
        eLearningObj,
        calendarObj,
        qualityObj,
      ],
    },
    {
      id: "Option-3",
      icon: faWarehouse,
      previewIcon: logistics,
      title: "Logistics",
      mainContent: [
        freightObj,
        ecomObj,
        accountingObj,
        assetObj,
        hcmOjb,
        warehouseObj,
        projectObj,
        purchaseObj,
        saleObj,
        websiteObj,
        eLearningObj,
        calendarObj,
        qualityObj,
      ],
    },
    {
      id: "Option-5",
      icon: faLightbulb,
      previewIcon: services,
      title: "Services",
      mainContent: [
        ecomObj,
        accountingObj,
        assetObj,
        hcmOjb,
        warehouseObj,
        projectObj,
        saleObj,
        websiteObj,
        eLearningObj,
        calendarObj,
        qualityObj,
      ],
    },
    {
      id: "Option-4",
      icon: faEnvelope,
      previewIcon: general,
      title: "General",
      mainContent: [
        ecomObj,
        accountingObj,
        assetObj,
        hcmOjb,
        warehouseObj,
        projectObj,
        saleObj,
        websiteObj,
        eLearningObj,
        calendarObj,
        qualityObj,
      ],
    },
  ],
  projectStore: [
    {
      id: 1,
      title: "Business Center Operations",
      icon: faBusinessTime,
      industry: "Business Services",
      duration: "2 months",
      overview:
        "Enhanced customized ERP solutions for better business services and operational efficiency.",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Engineering", "Manufacturing"],
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      clientName: "######1",
      difficulty: {
        title: "mid",
        progress: 70,
      },
      timeline: 1.5,
      content: [
        {
          type: "h1",
          data: "Challenges",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Inefficient management of business units, access cards, and parking spaces using Excel. Lack of a Human Resource Management System (HRMS) causing difficulties in salary processing and leave management. Need for an effective lead management system to enhance sales team performance and client engagement.
`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h1",
          data: "Solutions Provided",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "h2",
          data: "1. Software Implementation for Business Operations:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Problem: The business center was facing significant challenges in managing the allocation of business units, access cards, and parking spaces using Excel. This led to inefficiencies and errors in day-to-day operations.
`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Solution: We implemented a comprehensive software solution designed to streamline these processes. The new system allowed for efficient allocation and management, reducing errors and saving time.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Outcome: The business center experienced improved organization and efficiency in managing their business units, access cards, and parking spaces.
`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "2. HRMS System Implementation:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Problem: The absence of an HRMS system meant that the accounts team had to handle salary processing and leave management manually, leading to potential errors and inefficiencies.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Solution: We provided and maintained an HRMS system tailored to the business center's needs. This system automated salary processing, leave management, and other HR-related tasks.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Outcome: The new HRMS system enhanced the accuracy and efficiency of HR operations, freeing up the accounts team to focus on other critical tasks.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "3. Lead Management System for Sales Team:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Implementation: The sales team at the business center successfully implemented a lead management system to improve their lead handling and client engagement processes.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Outcome: The lead management system enabled the sales team to better track and manage leads, resulting in improved client engagement and increased sales efficiency.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Conclusion: The implementation of these solutions transformed the operational efficiency of XYZ Business Center. By addressing their key challenges with tailored software solutions, we helped them achieve a more organized, efficient, and productive work environment.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "Client Testimonial:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `"The new systems have significantly improved our operational efficiency. The software for managing business units and access cards, the HRMS system, and the lead management system have all contributed to a smoother and more efficient workflow. We are extremely satisfied with the results." - Sreeji, UWBC`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
      ],
    },
    {
      id: 2,
      title: "Optimizing Educational Operations",
      icon: faSchool,
      industry: "Education",
      duration: "2 months",
      overview:
        "Streamlined student data management, timetables, lead follow-ups with tailored ERP solutions.",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Education", "Retail", "Manufacturing"],
      description:
        "Streamlined operations at XYZ Educational Institute with tailored ERP solutions. Improved student data management, timetable organization, lead follow-ups, attendance tracking, and parent communication for enhanced efficiency and engagement.",
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      difficulty: {
        title: "High",
        progress: 90,
      },
      timeline: 2,
      content: [
        {
          type: "h1",
          data: "Challenges",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Inefficient management of students' data. Difficulty in organizing and maintaining timetables. Ineffective lead follow-up processes. Challenges in attendance management, parent reviews, and tracking student progression.`,
          tailwindCss: "mb-5",
        },
        {
          type: "h1",
          data: "Solutions Provided",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "h2",
          data: "Comprehensive Student Data Management:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Implemented software to manage student data efficiently, ensuring accurate and accessible information.`,
          tailwindCss: "mb-5",
        },
        {
          type: "h2",
          data: "Timetable Organization:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Developed a system to streamline the creation and maintenance of timetables, reducing conflicts and optimizing schedules.`,
          tailwindCss: "mb-5",
        },

        {
          type: "h2",
          data: "Lead Follow-up System:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Provided a lead management tool to track and engage with prospective students, improving follow-up processes and conversion rates.`,
          tailwindCss: "mb-5",
        },
        {
          type: "h2",
          data: "Attendance Management and Parent Communication:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Facilitated attendance tracking and provided tools for parent reviews.`,
        },
        {
          type: "li",
          data: `Implemented a system for tracking student progression and updating parents regularly.`,
        },
        {
          type: "li",
          data: `Maintained records internally for easy access and management.`,
          tailwindCss: "mb-5",
        },
        {
          type: "h2",
          data: "Outcome:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `The software solution transformed the institute's operations, making data management, timetable organization, lead follow-ups, attendance tracking, parent communication, and student progression tracking more efficient and effective. The institute experienced enhanced productivity, better resource management, and improved communication with parents, aligning with their specific needs.`,
          tailwindCss: "mb-5",
        },
        {
          type: "h2",
          data: "Client Testimonial:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `"The new systems have significantly improved our operational efficiency. The software for managing business units and access cards, the HRMS system, and the lead management system have all contributed to a smoother and more efficient workflow. We are extremely satisfied with the results." - Sreeji, UWBC`,
        },
      ],
    },
    {
      id: 3,
      title: "Shipchandler Quotation Management",
      icon: faShip,
      industry: "Marine Supplies",
      duration: "1 month",
      overview:
        "Streamlined ShipChandler's supplier quotation process with a customized software solution, automating price comparison and awarding.",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Education", "Retail", "Manufacturing"],
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      difficulty: {
        title: "Low",
        progress: 25,
      },
      timeline: 1,
      content: [
        {
          type: "h1",
          data: "Challenges",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Difficulty in obtaining quotations from multiple suppliers. Inefficient process for awarding quotations based on supplier prices. Need for customized solutions to meet specific business requirements.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h1",
          data: "Solutions Provided",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "h2",
          data: "1. Automated Quotation Management:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Implemented a system to streamline the process of obtaining quotations from various suppliers.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Enabled the company to receive and compare supplier prices efficiently.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "2. Quotation Awarding System:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Developed a solution to automate the awarding of quotations based on supplier prices.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Ensured a transparent and efficient selection process for suppliers.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "3. Customized Features:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Tailored the system to meet the specific needs of ShipChandler.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Included features to manage and finalize quotations based on orders.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "Outcome:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `The customized software solution significantly improved the company's ability to manage supplier quotations. By automating and optimizing the process of obtaining, comparing, and awarding quotations, the company experienced enhanced efficiency and accuracy in its operations. The tailored features ensured that the system aligned perfectly with their specific business needs, leading to better decision-making and streamlined workflow.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
      ],
    },
    {
      id: 4,
      title: "Optimizing Wholesale Distribution",
      icon: faBoxOpen,
      industry: "Wholesale Distribution",
      duration: "3 month",
      overview:
        "Streamlined operations for a wholesale distributor with a custom dashboard, enhancing efficiency multiple child companies.",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Retail", "Manufacturing"],
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      difficulty: {
        title: "High",
        progress: 85,
      },
      timeline: 1,
      content: [
        {
          type: "h1",
          data: "About the Client",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `The client is a fast-growing, trusted distributor of general food and non-food items, specializing in bulk grocery trading, with a strong footprint across the entire Middle East.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h1",
          data: "Challenges",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `Managing operations for multiple child companies. Difficulty in synchronizing tasks and to-do lists across different companies. Need for a centralized and personalized dashboard to streamline operations based on roles and responsibilities.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h1",
          data: "Solutions Provided",
          tailwindCss: "mb-2 text-5xl text-black dark:text-white",
        },
        {
          type: "h2",
          data: "1. Custom Dashboard Implementation:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Created a personalized dashboard to manage different child companies.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Centralized the to-do lists for various companies, synchronized according to the employees’ roles and responsibilities.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "2. System Customization:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "li",
          data: `Implemented a system tailored to the client's specific needs.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "li",
          data: `Enabled seamless integration and synchronization of tasks across multiple entities within the company.`,
          tailwindCss: "mb-5 text-neutral-600 dark:text-[#a1a1a1]",
        },
        {
          type: "h2",
          data: "Outcome:",
          tailwindCss: "mb-2 text-2xl text-black dark:text-white",
        },
        {
          type: "p",
          data: `The implementation of a custom dashboard and tailored system significantly enhanced the client's operational efficiency. By centralizing and synchronizing tasks and to-do lists, the company achieved better coordination and productivity across its various child companies. The personalized approach ensured that each employee had a clear understanding of their roles and responsibilities, leading to improved workflow and overall performance.`,
          tailwindCss: "text-neutral-600 dark:text-[#a1a1a1]",
        },
      ],
    },
  ],
};

export default data;

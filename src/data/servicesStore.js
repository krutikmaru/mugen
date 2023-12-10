import {
  faEnvelope,
  faFileInvoice,
  faIndustry,
  faLightbulb,
  faListCheck,
  faMoneyCheck,
  faServer,
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
      type: "ERP",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Engineering", "Manufacturing"],
      description:
        "Client needed an ERP that helps them manage their specialized Manufacturing workflow. Manufacturing flow included Engineered to order and Make to Stock scenarious with multi level Bill of Materials and Custom material flow and routing.",
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      clientName: "######1",
      difficulty: "Mid",
      timeline: 1.5,
      stack: [
        { title: "Mugen ERP", image: "/assets/images/third-parties/mugen.png" },
        { title: "React JS", image: "/assets/images/third-parties/react.png" },
        {
          title: "Azure Cloud Services",
          image: "/assets/images/third-parties/azure.png",
        },
        {
          title: "Cloudflare",
          image: "/assets/images/third-parties/cloudfare.png",
        },
      ],
      thirdPart: [
        {
          title: "Google Calendar integration for scheduling",
          image: "/assets/images/integrations/google-calendar.png",
        },
        {
          title: "MS Outlook integraation for EMAIL and SSO",
          image: "/assets/images/integrations/outlook.png",
        },
        {
          title:
            "SMS Integration for delivery management and customer notifications",
          image: "/assets/images/integrations/sms.png",
        },
        {
          title: "Whatsapp Integration for Customer notifications and chatbot",
          image: "/assets/images/integrations/whatsapp.png",
        },
        {
          title: "Integration with website for Lead gathering",
          image: "/assets/images/integrations/website.png",
        },
      ],
    },
    {
      id: 2,
      type: "CRM",
      name: "360 Lead and Sales Management solution for treatment company",
      sector: ["Helathcare", "Services"],
      description:
        "Design and deploy a CRM and Sales Management tool which connects their, instagram, whatsapp,facebook sms , email, website and retail kiosk channels to a single, centralized lead management system. Auto assignement of leads absed on nature and source helps agents respond to leads faster and more efficiently.",
      integrations: [],
      clientName: "######2",
      difficulty: "Mid",
      timeline: 2,
      stack: [
        "Mugen CRM",
        "Vue JS",
        "Linode",
        "Cloudflare",
        "Stripe (International Payments)",
        "Network International(UAE Payments)",
      ],
      thirdPart: [
        "Google Calendar integration for scheduling",
        "MS Outlook integraation for EMAIL and SSO",
        "SMS Integration for delivery management and customer notifications",
        "website, Whatsapp, instagram and facebook Integration for Customer notifications and chatbot",
        "Stripe and Network International Payment",
      ],
    },
    {
      id: 3,
      type: "ERP",
      name: "Manufacturing Focussed ERP for Engineering Company",
      sector: ["Engineering", "Manufacturing"],
      description:
        "Client needed an ERP that helps them manage their specialized Manufacturing workflow. Manufacturing flow included Engineered to order and Make to Stock scenarious with multi level Bill of Materials and Custom material flow and routing.",
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      clientName: "######1",
      difficulty: "Mid",
      timeline: 1.5,
      stack: ["Mugen ERP", "React JS", "Azure Cloud Services", "Cloudflare"],
      thirdPart: [
        "Google Calendar integration for scheduling",
        "MS Outlook integraation for EMAIL and SSO",
        "SMS Integration for delivery management and customer notifications",
        "Whatsapp Integration for Customer notifications and chatbot",
        "Integration with website for Lead gathering",
      ],
    },
    {
      id: 4,
      type: "ABC",
      name: "Krutik Maru ERP for Engineering Company",
      sector: ["Engineering", "Manufacturing"],
      description:
        "Client needed an ERP that helps them manage their specialized Manufacturing workflow. Manufacturing flow included Engineered to order and Make to Stock scenarious with multi level Bill of Materials and Custom material flow and routing.",
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      clientName: "######1",
      difficulty: "Mid",
      timeline: 1.5,
      stack: ["Mugen ERP", "React JS", "Azure Cloud Services", "Cloudflare"],
      thirdPart: [
        "Google Calendar integration for scheduling",
        "MS Outlook integraation for EMAIL and SSO",
        "SMS Integration for delivery management and customer notifications",
        "Whatsapp Integration for Customer notifications and chatbot",
        "Integration with website for Lead gathering",
      ],
    },
    {
      id: 5,
      type: "XYZ",
      name: "Mohd. Aqib ERP for Engineering Company",
      sector: ["Engineering", "Manufacturing"],
      description:
        "Client needed an ERP that helps them manage their specialized Manufacturing workflow. Manufacturing flow included Engineered to order and Make to Stock scenarious with multi level Bill of Materials and Custom material flow and routing.",
      integrations: [
        { title: "CRM", icon: faServer },
        { title: "Accounts", icon: faFileInvoice },
        { title: "Inventory", icon: faWarehouse },
        { title: "Task Management", icon: faListCheck },
        { title: "Payroll Systems", icon: faMoneyCheck },
      ],
      clientName: "######1",
      difficulty: "Mid",
      timeline: 1.5,
      stack: ["Mugen ERP", "React JS", "Azure Cloud Services", "Cloudflare"],
      thirdPart: [
        "Google Calendar integration for scheduling",
        "MS Outlook integraation for EMAIL and SSO",
        "SMS Integration for delivery management and customer notifications",
        "Whatsapp Integration for Customer notifications and chatbot",
        "Integration with website for Lead gathering",
      ],
    },
  ],
};

export default data;

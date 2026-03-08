// Mock Data for FactoryIQ Manufacturing Excellence Portal

// Role-based access configuration
export const roles = {
  admin: {
    name: 'Admin',
    modules: ['dashboard', 'projects', 'production', 'quality', 'supplychain', 'aftersales', 'collaboration', 'analytics']
  },
  engineer: {
    name: 'Engineer',
    modules: ['dashboard', 'production', 'quality', 'projects']
  },
  customer: {
    name: 'Customer',
    modules: ['dashboard', 'aftersales']
  }
};

// Dashboard Data
export const dashboardData = {
  activePrograms: 12,
  productionOutput: 15420,
  qualityYield: 96.8,
  supplierPerformance: 94.2,
  productionTrend: [1200, 1350, 1280, 1420, 1380, 1540, 1480, 1620, 1550, 1680, 1720, 15420],
  qualityTrend: [94.5, 95.2, 94.8, 96.1, 95.8, 96.5, 95.9, 96.8, 96.2, 97.1, 96.8, 96.8]
};

// Project Tracking Data
export const projects = [
  { id: 1, name: 'Automotive Component A', stage: 'R&D', status: 'Green', owner: 'John Smith', deadline: '2024-03-15' },
  { id: 2, name: 'Electronics Module B', stage: 'NPI', status: 'Yellow', owner: 'Sarah Johnson', deadline: '2024-02-28' },
  { id: 3, name: 'Medical Device C', stage: 'Production', status: 'Green', owner: 'Mike Williams', deadline: '2024-04-20' },
  { id: 4, name: 'Aerospace Part D', stage: 'R&D', status: 'Red', owner: 'Emily Brown', deadline: '2024-01-30' },
  { id: 5, name: 'Industrial Motor E', stage: 'NPI', status: 'Green', owner: 'David Lee', deadline: '2024-05-10' },
  { id: 6, name: 'Consumer Product F', stage: 'Production', status: 'Green', owner: 'Lisa Chen', deadline: '2024-03-25' },
  { id: 7, name: 'Telecom Hardware G', stage: 'R&D', status: 'Yellow', owner: 'James Wilson', deadline: '2024-04-05' },
  { id: 8, name: 'Energy System H', stage: 'NPI', status: 'Green', owner: 'Anna Martinez', deadline: '2024-06-15' }
];

// Production Line Data
export const productionLines = [
  { id: 1, name: 'Assembly Line 1', unitsProduced: 4250, yield: 97.2, downtime: 2.5 },
  { id: 2, name: 'Assembly Line 2', unitsProduced: 3800, yield: 96.8, downtime: 3.2 },
  { id: 3, name: 'Machining Center', unitsProduced: 2100, yield: 98.1, downtime: 1.8 },
  { id: 4, name: 'Paint & Coating', unitsProduced: 1850, yield: 95.5, downtime: 4.1 },
  { id: 5, name: 'Quality Inspection', unitsProduced: 3420, yield: 99.2, downtime: 0.8 }
];

export const productionTrend = [
  { month: 'Jan', units: 1200 },
  { month: 'Feb', units: 1350 },
  { month: 'Mar', units: 1280 },
  { month: 'Apr', units: 1420 },
  { month: 'May', units: 1380 },
  { month: 'Jun', units: 1540 }
];

// Quality Issues Data
export const qualityIssues = [
  { id: 1, defectType: 'Dimensional', rootCause: 'Tool Wear', affectedLine: 'Machining Center', status: 'Resolved' },
  { id: 2, defectType: 'Surface Finish', rootCause: 'Material Defect', affectedLine: 'Assembly Line 1', status: 'Open' },
  { id: 3, defectType: 'Assembly Error', rootCause: 'Human Error', affectedLine: 'Assembly Line 2', status: 'In Progress' },
  { id: 4, defectType: 'Paint Defect', rootCause: 'Equipment Malfunction', affectedLine: 'Paint & Coating', status: 'Open' },
  { id: 5, defectType: 'Welding Issue', rootCause: 'Process Parameter', affectedLine: 'Assembly Line 1', status: 'Resolved' },
  { id: 6, defectType: 'Contamination', rootCause: 'Environmental', affectedLine: 'Quality Inspection', status: 'In Progress' }
];

export const topDefects = [
  { type: 'Dimensional', count: 45 },
  { type: 'Surface Finish', count: 32 },
  { type: 'Assembly Error', count: 28 },
  { type: 'Paint Defect', count: 18 },
  { type: 'Welding Issue', count: 12 }
];

// Supplier Data
export const suppliers = [
  { id: 1, name: 'Global Materials Inc', deliveryStatus: 'On Time', leadTime: '14 days', riskLevel: 'Low' },
  { id: 2, name: 'Tech Components Ltd', deliveryStatus: 'Delayed', leadTime: '21 days', riskLevel: 'High' },
  { id: 3, name: 'Precision Parts Co', deliveryStatus: 'On Time', leadTime: '10 days', riskLevel: 'Low' },
  { id: 4, name: 'MetalWorks Factory', deliveryStatus: 'Delayed', leadTime: '28 days', riskLevel: 'Medium' },
  { id: 5, name: 'Electronic Solutions', deliveryStatus: 'On Time', leadTime: '7 days', riskLevel: 'Low' },
  { id: 6, name: 'Chemical Supplies Intl', deliveryStatus: 'On Time', leadTime: '12 days', riskLevel: 'Low' },
  { id: 7, name: 'Packaging Experts', deliveryStatus: 'Delayed', leadTime: '18 days', riskLevel: 'Medium' }
];

// Service Cases Data
export const serviceCases = [
  { id: 'SC-001', product: 'Industrial Motor X500', issue: 'Performance degradation', status: 'Open' },
  { id: 'SC-002', product: 'Control Unit A12', issue: 'Firmware update required', status: 'In Progress' },
  { id: 'SC-003', product: 'Sensor Module B7', issue: 'Replacement request', status: 'Resolved' },
  { id: 'SC-004', product: 'Power Supply Unit', issue: 'Warranty claim', status: 'Open' },
  { id: 'SC-005', product: 'Display Panel 15"', issue: 'Physical damage', status: 'In Progress' },
  { id: 'SC-006', product: 'Cooling System Pro', issue: 'Maintenance inquiry', status: 'Resolved' }
];

// Documents Data
export const documents = [
  { id: 1, name: 'BOM.xlsx', type: 'spreadsheet', size: '245 KB', date: '2024-01-15' },
  { id: 2, name: 'EngineeringDrawing.pdf', type: 'pdf', size: '1.2 MB', date: '2024-01-20' },
  { id: 3, name: 'QualityReport.pdf', type: 'pdf', size: '890 KB', date: '2024-01-22' },
  { id: 4, name: 'ProductionSchedule.xlsx', type: 'spreadsheet', size: '156 KB', date: '2024-01-25' },
  { id: 5, name: 'SupplierList.xlsx', type: 'spreadsheet', size: '98 KB', date: '2024-01-18' },
  { id: 6, name: 'SafetyGuidelines.pdf', type: 'pdf', size: '567 KB', date: '2024-01-10' }
];

// Analytics Data
export const analyticsData = {
  productionEfficiency: [92, 94, 91, 96, 93, 95, 97, 94, 96, 98, 95, 96],
  qualityDefectTrends: [4.2, 3.8, 4.5, 3.2, 3.5, 2.8, 3.1, 2.5, 2.9, 2.1, 2.4, 2.2],
  supplierDeliveryPerformance: [88, 92, 85, 94, 90, 96, 91, 95, 88, 97, 93, 94],
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};


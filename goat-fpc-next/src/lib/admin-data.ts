// Types and mock seed data for the admin portal

export type UserRole = 'super-admin' | 'content-manager' | 'farmer-manager' | 'report-viewer';

export interface Farmer {
  id: string;
  name: string;
  mobile: string;
  village: string;
  block: string;
  district: string;
  goats: number;
  joined: string;
  status: 'active' | 'pending' | 'inactive';
}

export interface MembershipApp {
  id: string;
  name: string;
  mobile: string;
  village: string;
  block: string;
  goats: number;
  occupation: string;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
}

export interface GoatRecord {
  id: string;
  tag: string;
  breed: string;
  owner: string;
  village: string;
  health: 'healthy' | 'vaccinated' | 'sick' | 'needs-checkup';
  lastCheckup: string;
  age: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'read' | 'replied';
}

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  category: string;
  status: 'published' | 'draft';
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  time: string;
  category: string;
}

// ─── Seed Data ──────────────────────────────────────────

const NAMES_F = ['Laxmi Bai', 'Sita Devi', 'Kamla Verma', 'Parvati Yadav', 'Sarojini Nair', 'Geeta Singh', 'Pushpa Devi', 'Rekha Sahu'];
const NAMES_M = ['Suresh Verma', 'Raman Sahu', 'Mohan Lal', 'Rajesh Kumar', 'Vikram Singh', 'Deepak Patel', 'Ashok Tiwari', 'Bhupendra Yadav', 'Prakash Dewangan', 'Anil Sharma', 'Santosh Sahu', 'Ramesh Nishad'];
const VILLAGES = ['Raipur', 'Arang', 'Abhanpur', 'Dharsiwa', 'Mana', 'Tilda', 'Simga', 'Baloda Bazar', 'Bilaigarh', 'Kasdol'];
const BLOCKS = ['Raipur', 'Arang', 'Abhanpur', 'Dharsiwa', 'Mana Camp', 'Tilda', 'Simga', 'Baloda Bazar'];
const BREEDS = ['Jamunapari', 'Beetal', 'Barbari', 'Sirohi', 'Sojat', 'Black Bengal', 'Jakhrana', 'Total'];
const STATUSES_FARMER: Array<'active' | 'pending' | 'inactive'> = ['active', 'active', 'active', 'active', 'pending', 'inactive'];
const STATUSES_MEMBERSHIP: Array<'pending' | 'approved' | 'rejected'> = ['pending', 'approved', 'approved', 'approved', 'rejected', 'pending'];
const HEALTH_STATUSES: Array<'healthy' | 'vaccinated' | 'sick' | 'needs-checkup'> = ['healthy', 'healthy', 'healthy', 'vaccinated', 'vaccinated', 'sick', 'needs-checkup'];

function pick<T>(arr: T[], i: number): T { return arr[i % arr.length]; }

export const MOCK_FARMERS: Farmer[] = Array.from({ length: 18 }, (_, i) => ({
  id: `FRM${String(i + 1).padStart(3, '0')}`,
  name: pick([...NAMES_M, ...NAMES_F], i),
  mobile: `+91 ${90000 + Math.floor(Math.random() * 10000)} ${10000 + Math.floor(Math.random() * 90000)}`,
  village: pick(VILLAGES, i),
  block: pick(BLOCKS, i),
  district: 'Raipur',
  goats: 5 + Math.floor(Math.random() * 45),
  joined: `2026-0${1 + (i % 5)}-${String(5 + i * 2).padStart(2, '0')}`,
  status: pick(STATUSES_FARMER, i),
}));

export const MOCK_MEMBERSHIPS: MembershipApp[] = Array.from({ length: 12 }, (_, i) => ({
  id: `MEM${String(i + 1).padStart(3, '0')}`,
  name: pick([...NAMES_M, ...NAMES_F], i + 5),
  mobile: `+91 ${90000 + Math.floor(Math.random() * 10000)} ${10000 + Math.floor(Math.random() * 90000)}`,
  village: pick(VILLAGES, i + 2),
  block: pick(BLOCKS, i + 1),
  goats: 5 + Math.floor(Math.random() * 30),
  occupation: pick(['Goat Rearing', 'Farming', 'Goat Rearing & Farming', 'Animal Husbandry'], i),
  status: pick(STATUSES_MEMBERSHIP, i),
  date: `2026-0${6 + (i % 2)}-${String(1 + i * 3).padStart(2, '0')}`,
}));

export const MOCK_GOATS: GoatRecord[] = Array.from({ length: 24 }, (_, i) => ({
  id: `GOT${String(i + 1).padStart(3, '0')}`,
  tag: `GOAT-${1000 + i}`,
  breed: pick(BREEDS, i),
  owner: pick([...NAMES_M, ...NAMES_F], i + 3),
  village: pick(VILLAGES, i),
  health: pick(HEALTH_STATUSES, i),
  lastCheckup: `2026-0${6 + (i % 3)}-${String(1 + i).padStart(2, '0')}`,
  age: `${6 + (i % 36)} months`,
}));

export const MOCK_INQUIRIES: Inquiry[] = [
  { id: 'INQ001', name: 'Ram Prasad', email: 'ram@email.com', subject: 'Goat Breeding Query', message: 'How can I participate in the breed improvement programme?', date: '2026-08-05', status: 'new' },
  { id: 'INQ002', name: 'Geeta Devi', email: 'geeta@email.com', subject: 'Membership Application', message: 'I want to become a member. What is the process?', date: '2026-08-04', status: 'read' },
  { id: 'INQ003', name: 'Ajay Singh', email: 'ajay@email.com', subject: 'Vaccination Schedule', message: 'When is the next vaccination drive in Arang block?', date: '2026-08-03', status: 'replied' },
  { id: 'INQ004', name: 'Manisha Sahu', email: 'manisha@email.com', subject: 'Manure Processing', message: 'How do I sell goat manure to the processing unit?', date: '2026-08-02', status: 'new' },
  { id: 'INQ005', name: 'Bhupesh Nishad', email: 'bhupesh@email.com', subject: 'Ajah Fi Insurance', message: 'Tell me more about Ajah Fi insurance plans for goats.', date: '2026-08-01', status: 'read' },
];

export const MOCK_NEWS: NewsPost[] = [
  { id: 'NEW001', title: 'Training Programme for Goat Farmers', date: '2026-08-02', category: 'Training', status: 'published' },
  { id: 'NEW002', title: 'Vaccination Drive Completed', date: '2026-07-26', category: 'Health', status: 'published' },
  { id: 'NEW003', title: 'Organic Manure Production Milestone', date: '2026-07-20', category: 'Value Addition', status: 'published' },
  { id: 'NEW004', title: 'New Breed Introduction', date: '2026-07-15', category: 'Breeding', status: 'draft' },
  { id: 'NEW005', title: 'Farmer Empowerment Workshop', date: '2026-07-10', category: 'Training', status: 'published' },
];

export const MOCK_USERS: AdminUser[] = [
  { id: 'USR001', name: 'Super Admin', email: 'admin@goatagri.in', role: 'super-admin', status: 'active' },
  { id: 'USR002', name: 'Content Manager', email: 'content@goatagri.in', role: 'content-manager', status: 'active' },
  { id: 'USR003', name: 'Farmer Manager', email: 'farmers@goatagri.in', role: 'farmer-manager', status: 'active' },
  { id: 'USR004', name: 'Report Viewer', email: 'reports@goatagri.in', role: 'report-viewer', status: 'inactive' },
];

export const MOCK_ACTIVITIES: Activity[] = [
  { id: 'ACT001', type: 'membership', description: 'New membership application from Ram Prasad', time: '2 hours ago', category: 'Membership' },
  { id: 'ACT002', type: 'goat', description: 'Vaccination record updated for GOAT-1015', time: '4 hours ago', category: 'Goat Health' },
  { id: 'ACT003', type: 'news', description: 'News post "Training Programme" published', time: '1 day ago', category: 'Content' },
  { id: 'ACT004', type: 'membership', description: 'Membership approved: Suresh Verma', time: '1 day ago', category: 'Membership' },
  { id: 'ACT005', type: 'goat', description: 'New goat record added: Black Bengal, Owner: Laxmi Bai', time: '2 days ago', category: 'Goat Management' },
  { id: 'ACT006', type: 'inquiry', description: 'New inquiry from Geeta Devi about breeding', time: '2 days ago', category: 'Inquiries' },
  { id: 'ACT007', type: 'membership', description: '5 farmers joined from Raipur block', time: '3 days ago', category: 'Membership' },
  { id: 'ACT008', type: 'goat', description: 'Health camp conducted for 150 goats in Arang', time: '4 days ago', category: 'Goat Health' },
];

// ─── Growth data (farmers per month) ────────────────────

export const FARMERS_GROWTH = [
  { month: 'Mar', count: 12 },
  { month: 'Apr', count: 35 },
  { month: 'May', count: 68 },
  { month: 'Jun', count: 95 },
  { month: 'Jul', count: 130 },
  { month: 'Aug', count: 152 },
];

export const MEMBERSHIP_BREAKDOWN = [
  { name: 'Approved', value: 85 },
  { name: 'Pending', value: 15 },
  { name: 'Rejected', value: 5 },
];

export const GOAT_STATUS = [
  { name: 'Healthy', value: 18000, color: '#4CAF50' },
  { name: 'Vaccinated', value: 8500, color: '#2196F3' },
  { name: 'Sick', value: 1200, color: '#F44336' },
  { name: 'Needs Checkup', value: 2300, color: '#FF9800' },
];

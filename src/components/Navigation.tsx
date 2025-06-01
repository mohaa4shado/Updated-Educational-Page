import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { BookOpen, User, Home, BarChart2, Award, Settings, Bell } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" className="mb-4" dir="rtl">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <BookOpen className="me-2" size={24} color="#1a73e8" />
          <span className="fw-bold">منصة التعليم</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="d-flex align-items-center">
              <Home size={18} className="me-1" /> الرئيسية
            </Nav.Link>
            <Nav.Link href="#courses" className="d-flex align-items-center">
              <BookOpen size={18} className="me-1" /> الدروس
            </Nav.Link>
            <Nav.Link href="#stats" className="d-flex align-items-center">
              <BarChart2 size={18} className="me-1" /> الإحصائيات
            </Nav.Link>
            <Nav.Link href="#competitions" className="d-flex align-items-center">
              <Award size={18} className="me-1" /> المسابقات
            </Nav.Link>
            <NavDropdown 
              title={<span><Settings size={18} className="me-1" /> الإعدادات</span>} 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">الملف الشخصي</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">تفضيلات الحساب</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">تسجيل الخروج</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="d-flex align-items-center">
            <div className="position-relative me-3">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div className="me-2 text-end">
                <div className="fw-bold">ماجد مصطفى</div>
                <div className="text-muted small">المستوى المتوسط</div>
              </div>
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <User size={20} />
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
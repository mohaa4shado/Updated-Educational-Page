import React from 'react';
import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import ProgressCard from '../components/ProgressCard';
import CountdownTimer from '../components/CountdownTimer';
import PromoBanner from '../components/PromoBanner';
import CompetitionBadge from '../components/CompetitionBadge';
import StatisticsCard from '../components/StatisticsCard';
import ChallengeCard from '../components/ChallengeCard';
import { Headphones, BookOpen, MessageSquare, Trophy } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Calculate date for countdown (30 days from now)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  return (
    <div dir="rtl">
      <Navigation />
      <Container>
        {/* Welcome Header */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <h4>مرحبا بك</h4>
            <h2 className="text-primary">ماجد مصطفى</h2>
          </div>
          <div className="text-muted">
            <h6>الأربعاء، 30 مايو 2025</h6>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mb-4 alert alert-danger">
          مبروك خصم حالي على اشتراكك السنوي
        </div>

        {/* Main Section - Public Station */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">المحطة العامة</h5>
              <div className="d-flex">
                <button className="btn btn-sm btn-outline-secondary me-2">
                  اعدادات تخصيص
                </button>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-grid"></i>
                </button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <ProgressCard 
                  title="لفظي"
                  lessonCount={30}
                  completedLessons={8}
                  disciplinePercentage={35}
                  variant="blue"
                  icon={<Headphones size={24} />}
                />
              </Col>
              <Col md={6}>
                <ProgressCard 
                  title="كمي"
                  lessonCount={23}
                  completedLessons={11}
                  disciplinePercentage={60}
                  variant="green"
                  icon={<BookOpen size={24} />}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Private Station */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">المحطة الخاصة</h5>
              <div className="d-flex">
                <button className="btn btn-sm btn-outline-secondary me-2">
                  اعدادات تخصيص
                </button>
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-grid"></i>
                </button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} className="mb-4 mb-md-0">
                <ProgressCard 
                  title="لفظي"
                  lessonCount={30}
                  completedLessons={8}
                  disciplinePercentage={35}
                  variant="blue"
                  icon={<Headphones size={24} />}
                />
              </Col>
              <Col md={6}>
                <ProgressCard 
                  title="كمي"
                  lessonCount={23}
                  completedLessons={11}
                  disciplinePercentage={60}
                  variant="green"
                  icon={<BookOpen size={24} />}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Promo Banner */}
        <Row className="mb-4">
          <Col md={12}>
            <PromoBanner 
              imageUrl="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              discount="20% خصم"
              title="Spring Season Festival"
              subtitle="Limited Time Offer"
            />
          </Col>
        </Row>

        {/* Competition Section */}
        <div className="mb-4">
          <CompetitionBadge 
            prizeAmount="1500 ريال سعودي" 
            competitionDate="20/06/2025"
          />
        </div>

        {/* Challenge Timer */}
        <Row className="mb-4">
          <Col md={12}>
            <CountdownTimer date={targetDate} />
          </Col>
        </Row>

        {/* Challenge Section */}
        <Card className="mb-4">
          <Card.Header>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                <Trophy size={18} className="me-2" />
                دوري التحدي
              </h5>
              <div className="badge bg-primary p-2 d-flex align-items-center">
                <span className="fw-bold me-1">500</span>
                <span>ريال</span>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col lg={4} md={6} className="mb-3">
                <ChallengeCard 
                  title="تحدي الأسبوع" 
                  description="أكمل 10 دروس هذا الأسبوع للفوز بـ 100 نقطة إضافية"
                  points={100}
                />
              </Col>
              <Col lg={4} md={6} className="mb-3">
                <ChallengeCard 
                  title="تحدي اللغة" 
                  description="أجب على 50 سؤال في قسم اللغة للفوز بـ 150 نقطة"
                  points={150}
                />
              </Col>
              <Col lg={4} md={6} className="mb-3">
                <ChallengeCard 
                  title="تحدي المثابرة" 
                  description="سجل دخول لمدة 7 أيام متتالية للفوز بـ 75 نقطة"
                  points={75}
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Statistics Section */}
        <Row className="mb-4">
          <Col md={6} lg={3} className="mb-3 mb-lg-0">
            <StatisticsCard 
              title="عدد الاختبارات المنفذة" 
              value="3"
            />
          </Col>
          <Col md={6} lg={3} className="mb-3 mb-lg-0">
            <StatisticsCard 
              title="نسبة إجتياز آخر اختبار" 
              value="76%"
            />
          </Col>
          <Col md={6} lg={3} className="mb-3 mb-lg-0">
            <StatisticsCard 
              title="عدد الاختبارات المتبقية" 
              value="5%"
              change={5}
              positive={true}
            />
          </Col>
          <Col md={6} lg={3}>
            <StatisticsCard 
              title="مقارنة الاختبار بالاختبار السابق" 
              value="20%"
              change={20}
              positive={false}
            />
          </Col>
        </Row>

        {/* Second Promo Banner */}
        <Row className="mb-4">
          <Col md={12}>
            <PromoBanner 
              imageUrl="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              discount="20% خصم"
              title="Spring Season Festival"
              subtitle="Limited Time Offer"
            />
          </Col>
        </Row>

        {/* Bottom Navigation */}
        <div className="fixed-bottom bg-white py-2 border-top">
          <Container>
            <Nav className="justify-content-between">
              <Nav.Link href="#home" className="text-center">
                <Trophy size={20} />
                <div className="small">التحدي</div>
              </Nav.Link>
              <Nav.Link href="#profile" className="text-center">
                <MessageSquare size={20} />
                <div className="small">الرسائل</div>
              </Nav.Link>
              <Nav.Link href="#home" className="text-center">
                <BookOpen size={20} />
                <div className="small">الدروس</div>
              </Nav.Link>
              <Nav.Link href="#profile" className="text-center">
                <Trophy size={20} />
                <div className="small">المسابقات</div>
              </Nav.Link>
              <Nav.Link href="#home" className="text-center">
                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto" style={{ width: '40px', height: '40px' }}>
                  <Trophy size={20} color="white" />
                </div>
              </Nav.Link>
            </Nav>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
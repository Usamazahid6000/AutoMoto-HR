import React from "react";
import logo from "./Images/logo.png";
import tick from "./Images/tick.png";
import hiringimage from "./Images/hiring_section_img.png";
import payroll from "./Images/payroll_section_img.png";
import employeExperience from "./Images/employee_experience_img.png";
import monitoring from "./Images/monitoring_section_img.png";
import succeed from "./Images/succeed_section_img.png";
import career from "./Images/career_section_img.png";
import group23 from "./Images/Group 23.png";
import arrow from "./Images/section-ten-image-2.png";
import group24 from "./Images/Group 6563.png";
import group25 from "./Images/Group 6564.png";
import group26 from "./Images/Group 26.png";
import image8 from "./Images/image_8.png";
import boypic from "./Images/boy.png";
import footer_logo from "./Images/footer_logo.png";
import {
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faYoutube,
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faPhone,
  faEnvelope,
  faArrowRight
);

const App = () => {
  return (
    <>
      <div className="main-wrapper">
        <section className="nav-bar position_absolute d-flex justify-content-center ">
          <div className="navbar_main">
            <nav class="navbar navbar-expand-xl">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item nav_link">
                    <a class="nav-link mx-3" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item dropdown nav_link">
                    <a
                      class="nav-link dropdown-toggle mx-3"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Option 1
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Option 2
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item nav_link">
                    <a class="nav-link mx-3" aria-current="page" href="#">
                      Why Us
                    </a>
                  </li>
                  <li class="nav-item nav_link">
                    <a class="nav-link mx-3" aria-current="page" href="#">
                      About Us
                    </a>
                  </li>
                  <li class="nav-item nav_link">
                    <a class="nav-link mx-3" aria-current="page" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
                <form class="form-inline">
                  <button className="px-4 py-3 mx-md-3 mx-0 nav_btn_1">
                    Schedule Your No Obligation Consultation
                  </button>
                  <button className="px-4 py-3 nav_btn_2">Login</button>
                </form>
              </div>
            </nav>
          </div>
        </section>
        <section className="slider_section">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row center_div">
                  <div className="col-md-2 margin_bottom_80 d-lg-block d-none">
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <div className="divider active"></div>
                      <p className="mb-0">01</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">02</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">03</p>
                    </div>
                  </div>
                  <div className="col-md-4 center_on-mobile">
                    <div className="slider-heading">
                      <h3> Effortlessly Manage HR, Benefits & Payroll!</h3>
                    </div>
                    <div className="slider-content">
                      <p>
                        Say goodbye to administrative hassles by embracing a
                        simplified solution that serves all your HR needs –
                        <a href="">AutomotoHR</a>
                      </p>
                    </div>
                    <div className="learn-more-button">
                      <button className="d-flex align-items-center text-white button mt-5">
                        <p className="mb-0">Learn More</p>
                        <i className="fa-solid fa-arrow-right">
                          <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                        </i>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="slider-one-background"></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row center_div">
                  <div className="col-md-2 margin_bottom_80 d-lg-block d-none">
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">01</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <div className="divider active"></div>
                      <p className="mb-0">02</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">03</p>
                    </div>
                  </div>
                  <div className="col-md-5 center_on-mobile">
                    <div className="slider-heading">
                      <h3> Smart Onboarding with Automto HR! 02</h3>
                    </div>
                    <div className="slider-content">
                      <p>
                        Leave behind inefficient onboarding methods and embrace
                        <a href="">AutomotoHR</a> to optimize data management,
                        expedite paperwork, & elevate orientation.
                      </p>
                    </div>
                    <div className="learn-more-button">
                      <button className="text-white my-5">
                        Learn More
                        <div className="arrow-icon"></div>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="slider-two-background"></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="row center_div">
                  <div className="col-md-2 margin_bottom_80 d-lg-block d-none">
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      aria-current="true"
                      aria-label="Slide 1"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">01</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    >
                      <div className="divider"></div>
                      <p className="mb-0">02</p>
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center gap_div"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    >
                      <div className="divider active"></div>
                      <p className="mb-0">03</p>
                    </div>
                  </div>
                  <div className="col-md-5 center_on-mobile">
                    <div className="slider-heading">
                      <h3> One-Stop Shop for HR & Hiring! 03</h3>
                    </div>
                    <div className="slider-content">
                      <p>
                        Efficiently handle job postings, targeted advertising,
                        candidate management, and assessment checks in one
                        place.
                      </p>
                    </div>
                    <div className="learn-more-button">
                      <button className="text-white my-5">
                        Learn More
                        <div className="arrow-icon"></div>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="slider-three-background"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Video_section margin_top_on_large_screen">
          <div className="row video_div">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <video
                src="https://www.youtube.com/embed/QGAMTlI6XxY"
                class="embed-responsive-item responsive-video"
                autoplay="true"
                controls="true"
              ></video>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 yellow_bubble_position">
              <div className="yellow-bubble"></div>
              <div className="video-text-area">
                <div className="row">
                  <div className="col-sm-12 set-content_center-tablet">
                    <p className="heading-h4-grey text-white">WHAT WE OFFER?</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom">
                      <p className="second_heading text-white mb-0">
                        An all-in-one HR management system for every business
                        size and industry.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="detail-text text-white  opacity_80 text_align_center_tablet">
                      AutomotoHR brings all your HR functions together in one
                      convenient place, making it effortless to handle every
                      aspect of the employee journey from hiring to training and
                      beyond. So take the leap and redefine the workplace
                      experience by knowing the features you need.
                    </p>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Efficient
                          <span className="yellow-text ms-1 me-1">
                            PEOPLE OPERATIONS
                          </span>
                          for streamlined HR management.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Comprehensive
                          <span className="yellow-text ms-1 me-1">
                            RECRUITMENT
                          </span>
                          tools for attracting top talent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Seamless
                          <span className="yellow-text ms-1 me-1">
                            HR ELECTRONIC ONBOARDING
                          </span>
                          for a smooth start.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Robust
                          <span className="yellow-text ms-1 me-1">
                            EMPLOYEE MANAGEMENT
                          </span>
                          features for adequate control.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Automated
                          <span className="yellow-text ms-1 me-1">PAYROLL</span>
                          system for accurate processing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="margin_bottom_16">
                      <div className="d-flex align-items-center">
                        <img
                          className="Object_fit me-3"
                          src={tick}
                          alt="tick-icon"
                        />
                        <p className="detail-text text-white opacity_80 mb-0">
                          Ensuring
                          <span className="yellow-text ms-1 me-1">
                            COMPLIANCE
                          </span>
                          with regulations and requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <button className="d-flex align-items-center button bg-white mt-5 center_tablet position_relative_Mob">
                      <p className="mb-0">Explore Our Solutions</p>
                      <i className="fa-solid fa-arrow-right">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features-section width_100 d-flex justify-content-center align-items-center py-5">
          <div className="w-80 section_width_100_on_mobile">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="heading py-5">
                <p>WHY SHOULD YOU SWITCH TO AUTOMOTOHR?</p>
              </div>
              <div className="title text-center padding_left_right margin_top">
                <h5>
                  Recruit, Onboard, and Manage all of your Employees in one
                  place. Hire to Retire Talent Management platform.
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="carrier-section width_100 d-flex justify-content-center align-items-center py-5">
          <div className="width_80">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 ps-md-3 onBoard_section_center_tab order-lg-1 order-2">
                <div className=" ps-lg-3 ps-0 width_90 width_on_max_1600 onBoard_section_center_tab width_on_tab">
                  <p className="titles"> ONBOARDING AND HIRING</p>
                  <p className="sub-title text-sm-center text-lg-start text-center">
                    With advanced recruiting tools, discover and onboard the
                    right talent faster.
                  </p>
                  <p className="content mt-4 text_center_on_tab">
                    Ready to build a rockstar team without hassle? Say hello to
                    AutomotoHR, the ultimate hiring solution. It swiftly finds,
                    evaluates, and onboards top talent in a flash. With
                    impeccable applicant tracking and features like automated
                    HR, electronic self onboarding, and an employee dashboard,
                    managing your dream team is a breeze. So get ready to hire
                    like a boss with AutomotoHR!
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
                <div className="d-flex justify-content-lg-end justify-content-md-center img_size">
                  <div className="position-relative">
                    <div className="hiring_section_bg d-lg-block d-none"></div>
                    <img
                      src={hiringimage}
                      alt=""
                      className="position-relative z-2 mx-lg-5 mx-0"
                    />
                    <div className="hiring_section_bubble_1 d-lg-block d-none"></div>
                    <div className="hiring_section_bubble_2_div d-lg-block d-none">
                      <div className="hiring_section_bubble_2 d-lg-block d-none"></div>
                    </div>
                    <div className="hiring_section_bubble_3_div d-lg-block d-none">
                      <div className="bubble_3"></div>
                    </div>
                    <div className="hiring_section_bubble_4_div d-lg-block d-none">
                      <div className="bubble_4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="payroll-section width_100 d-flex justify-content-center align-items-center py-5 position-relative">
          <div className="width_80">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-start justify-content-center img_size_90">
                <div className="position-relative">
                  <div className="pu_bubble d-lg-block d-none"></div>
                  <div className="Ellipse21_div d-lg-block d-none">
                    <div className="Ellipse21_bubble d-lg-block d-none"></div>
                  </div>
                  <div className="position-relative z_index">
                    <img src={payroll} alt="" />
                  </div>
                </div>
                <div className="payroll_bubble d-lg-block d-none"></div>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12 ps-lg-5 ps-0  onBoard_section_center_tab">
                <div className="ps-lg-3 ps-0 onBoard_section_center_tab width_on_tab">
                  <p className="titles"> TIME, PAYROLL, AND BENEFITS</p>
                  <p className="sub-title text-lg-start text-center">
                    One platform for time tracking, benefits, and payroll to
                    simplify workload.
                  </p>
                  <p className="content mt-4 text-lg-start text-center">
                    With AutomotoHR, juggling multiple HR tasks is a thing of
                    the past. The remarkable platform lets you effortlessly
                    track hours worked, handle benefits enrollment, and
                    seamlessly process payroll, all in one place. No more
                    tedious data double entry or manual approval headaches—just
                    smooth sailing towards easy and precise payroll management
                    for both you and your employees.
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="employee_experience_section width_100 d-flex justify-content-lg-end justify-content-center align-items-center py-lg-4 py-5">
          <div className="width_90">
            <div className="row d-flex justify-content-lg-end justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 ps-lg-5 ps-0 onBoard_section_center_tab order-lg-1 order-2">
                <div className="ps-lg-3 ps-0 width_80 onBoard_section_center_tab width_on_tab">
                  <p className="titles"> EMPLOYEE EXPERIENCE & PERFORMANCE</p>
                  <p className="sub-title text-lg-start text-center">
                    Take your organization's culture to new heights with a smart
                    suite of tools.
                  </p>
                  <p className="content mt-4 text-lg-start text-center">
                    Nurturing a strong company culture begins with actively
                    engaging and investing in your employees' development. With
                    AutomotoHR, you gain access to a comprehensive set of tools
                    designed to collect feedback, amplify employee satisfaction,
                    and facilitate personal and professional growth. This
                    results in a vibrant and thriving organization that attracts
                    top talent to join its ranks.
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-center order-lg-2 order-1">
                <div className="position-relative">
                  <div className="employee_experience_img_section d-lg-block d-none">
                    <div className="employee_experience_bubble background_00C9FF d-lg-block d-none"></div>
                  </div>
                  <img
                    src={employeExperience}
                    alt=""
                    className="employee_img section_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="monitoring-section width_100 d-flex justify-content-center align-items-center py-5 position-relative">
          <div className="width_80">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-start justify-content-center img_size_90">
                <div className="position-relative">
                  <div className="pu_bubble d-lg-block d-none"></div>
                  <div className="Ellipse21_div d-lg-block d-none">
                    <div className="Ellipse21_bubble d-lg-block d-none"></div>
                  </div>
                  <div className="position-relative z_index">
                    <img src={monitoring} alt="" />
                  </div>
                </div>
                <div className="payroll_bubble d-lg-block d-none"></div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 ps-lg-5 ps-0 onBoard_section_center_tab">
                <div className="ps-lg-3 ps-0 width_90 onBoard_section_center_tab width_on_tab">
                  <p className="titles"> VACATION & TIME OFF MONITORING</p>
                  <p className="sub-title text-lg-start text-center">
                    Eliminate complexity and save time by simplifying vacation
                    management.
                  </p>
                  <p className="content mt-4 text-lg-start text-center">
                    Say goodbye to manual vacation tracking and endless
                    spreadsheets. From submitting requests to approving and
                    tracking time off balances, AutomotoHR takes care of it all,
                    ensuring accurate records and a smoother workflow. Simplify
                    your vacation, leaves, and paid time off tracking with
                    AutomotoHR, and enjoy peace of mind knowing everything is
                    organized and accounted for.
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="succeed-section width_100 d-flex justify-content-lg-end justify-content-center align-items-center py-lg-4 py-5">
          <div className="width_90">
            <div className="row d-flex justify-content-lg-end justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 ps-lg-5 ps-0 onBoard_section_center_tab order-lg-1 order-2">
                <div className="ps-lg-3 ps-0 width_80 onBoard_section_center_tab width_on_tab">
                  <p className="titles"> TRANSFORM, EMPOWER & SUCCEED</p>
                  <p className="sub-title text-lg-start text-center">
                    Optimize employee experience, performance, goals,
                    satisfaction & well-being.
                  </p>
                  <p className="content mt-4 text-lg-start text-center">
                    Unleash the true potential of your organization with
                    AutomotoHR's robust feature set, designed to optimize
                    employee experience and revolutionize performance
                    management. Drive goal alignment throughout your workforce,
                    gather invaluable feedback through employee satisfaction
                    surveys and prioritize employee wellbeing to cultivate a
                    supportive work environment.
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-center order-lg-2 order-1">
                <div className="position-relative">
                  <div className="employee_experience_img_section d-lg-block d-none">
                    <div className="employee_experience_bubble d-lg-block d-none"></div>
                  </div>
                  <img
                    src={succeed}
                    alt=""
                    className="employee_img section_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="career-section width_100 d-flex justify-content-center align-items-center py-5">
          <div className="width_80">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-lg-start justify-content-center img_size_90">
                <div className="position-relative">
                  <div className="position-relative z-1">
                    <img src={career} alt="" />
                  </div>
                  <div className="carrier_section_bubble_1_div d-lg-block d-none">
                    <div className="carrier_bubble_1"></div>
                  </div>
                  <div className="carrier_section_bubble_2_div d-lg-block d-none">
                    <div className="carrier_bubble_2"></div>
                  </div>
                  <div className="carrier_section_bubble_3 d-lg-block d-none"></div>
                  <div className="carrier_section_bubble_4 d-lg-block d-none">
                    <div className="carrier_bubble_4"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 ps-lg-0 ps-lg-5 ps-0 onBoard_section_center_tab">
                <div className="ps-lg-3 ps-0 onBoard_section_center_tab">
                  <p className="titles"> FULL COMPANY CAREER WEBSITE</p>
                  <p className="sub-title text-lg-start text-center">
                    Get a slick full company career website that dazzles on
                    desktop & mobile.
                  </p>
                  <p className="content mt-4 text-lg-start text-center">
                    Our recruitment software creates a branded full company
                    career website for your business with all your job openings.
                    It updates automatically and can be customized with your
                    logo and website link. Effortlessly share your openings on
                    social media and popular job boards to expand your candidate
                    pool. Resultantly, your employer brand improves as
                    candidates appreciate the ease of applying for jobs.
                  </p>
                </div>
                <button className="d-flex align-items-center text-white button mt-5">
                  <p className="mb-0">Explore Our Solutions</p>
                  <i className="fa-solid fa-arrow-right">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="our_process-section padding_top">
          <div className="margin_bottom d-flex justify-content-center align-items-center">
            <p className="process_title d-flex justify-content-center align-items-center mb-0">
              OUR PROCESS
            </p>
          </div>
          <div className="margin_bottom">
            <p className="d-flex justify-content-center align-items-center second-heading mb-0">
              Unlock extraordinary HR management for your organization.
            </p>
          </div>
          <p className="sample-text text-center mb-4">
            Take these simple steps to achieve success today!
          </p>
          <ul className="d-flex justify-content-around list_style_type width_100">
            <div className="d-flex justify-content-around width_80 flex_direction_mobile">
              <li className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className="small-img-div process_section_adjustment_on_mobile">
                  <img src={group23} alt="" />
                  <div className="text-below-image text-center">
                    <p>
                      Get in touch <span className="d-md-block">with Us</span>
                    </p>
                  </div>
                </div>
                <img
                  className="margin_bottom_left d-md-block d-none"
                  src={arrow}
                  alt=""
                />
              </li>
              <li className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className="small-img-div process_section_adjustment_on_mobile">
                  <img src={group24} alt="" />
                  <div className="text-below-image text-center">
                    <p>
                      See a <span className="d-md-block">Personalized</span>
                      <span className="d-md-block">Product Demo</span>
                    </p>
                  </div>
                </div>
                <img
                  className="margin_bottom_left d-md-block d-none"
                  src={arrow}
                  alt=""
                />
              </li>
              <li className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className="small-img-div process_section_adjustment_on_mobile">
                  <img src={group25} alt="" />
                  <div className="text-below-image text-center">
                    <p>
                      Begin your
                      <span className="d-md-block">Implementation</span>
                      <span className="d-md-block">Process</span>
                    </p>
                  </div>
                </div>
                <img
                  className="margin_bottom_left d-md-block d-none"
                  src={arrow}
                  alt=""
                />
              </li>
              <li className="d-flex justify-content-md-start justify-content-center align-items-center">
                <div className="small-img-div process_section_adjustment_on_mobile">
                  <img src={group26} alt="" />
                  <div className="text-below-image text-center">
                    <p>
                      Witness the
                      <span className="d-md-block">Transformation</span>
                    </p>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <button className="d-flex align-items-center text-white button mt-5">
              <p className="mb-0">Get Started</p>
              <i className="fa-solid fa-arrow-right">
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </i>
            </button>
          </div>
        </section>
        <div className="padding_bottom_12rem">
          <section className="third-last-section blue-background width_100 d-flex justify-content-center align-items-center mt-5">
            <div className="overflow-hidden position-relative">
              <div className="padding_top padding_bottom d-flex justify-content-center align-items-center">
                <div className="row margin_bottom_120 width_80">
                  <div className="col-lg-6 col-md-12 col-sm-12 yellow_bubble_position_relative onBoard_section_center_tab order-lg-1 order-2">
                    <p className="heading_HR opacity_nintey mb-0 text-white">
                      INNOVATING HR
                    </p>
                    <p className="second-heading opacity_nintey mb-0 text-white pt-4 text-lg-start text-center">
                      HR Practices Redefined & Elevated by Innovation
                    </p>
                    <div className="yellow_bubble_2_div d-lg-block d-none">
                      <div className="yallow_bubble_2"></div>
                    </div>
                    <ul class="nav nav-tabs mt-4" id="myTabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active tabs"
                          id="tab1"
                          data-bs-toggle="tab"
                          data-bs-target="#content1"
                          type="button"
                          role="tab"
                          aria-controls="content1"
                          aria-selected="true"
                        >
                          Our Mission
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link tabs"
                          id="tab2"
                          data-bs-toggle="tab"
                          data-bs-target="#content2"
                          type="button"
                          role="tab"
                          aria-controls="content2"
                          aria-selected="false"
                        >
                          Our Vision
                        </button>
                      </li>
                    </ul>

                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="content1"
                        role="tabpanel"
                        aria-labelledby="tab1"
                      >
                        <p className="text-white tab-content_padding_top">
                          Our mission is to revolutionize talent acquisition and
                          drive business growth efficiently by offering
                          organizations a cutting-edge HR software solution.
                          Unlike half-baked onboarding solutions, we provide a
                          modern and mobile user experience, empowering
                          companies with customization options and seamless
                          integration. By delivering these advanced features, we
                          aim to assist organizations in managing talent
                          acquisition effectively, enhancing their productivity,
                          and enabling them to thrive in a competitive business
                          landscape.
                        </p>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="content2"
                        role="tabpanel"
                        aria-labelledby="tab2"
                      >
                        <p className="text-white tab-content_padding_top">
                          Our mission is to revolutionize talent acquisition and
                          drive business growth efficiently by offering
                          organizations a cutting-edge HR software solution.
                          Unlike half-baked onboarding solutions, we provide a
                          modern and mobile user experience, empowering
                          companies with customization options and seamless
                          integration. By delivering these advanced features, we
                          aim to assist organizations in managing talent
                          acquisition effectively, enhancing their productivity,
                          and enabling them to thrive in a competitive business
                          landscape.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 order-lg-2 order-1">
                    <div className="light_bubble_position_relative text-lg-start text-center">
                      <img className="rotate-img" src={image8} />
                      <div className="light_green_bubble_div d-lg-block d-none">
                        <div className="light_green_bubble"></div>
                      </div>
                      <div className="light_red_cicrcle_div d-lg-block d-none">
                        <div className="light_red_circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skyBlue-bubble d-lg-block d-none"></div>
            </div>
            <div className="Notable-Benefits d-flex justify-content-center width_100 position_absolute">
              <div className="d-flex flex-column justify-content-lg-start justify-content-center align-items-lg-start align-items-center width_70 section_width_100_on_mobile">
                <div className="Notable-Benefits_heading text-white">
                  <p>Notable Benefits</p>
                </div>
                <div className="all_card_main d-flex flex-lg-row flex-column justify-content-center gap-4">
                  <div className="common_card_div bg-white background_image_01 common_card_width">
                    <div className="d-flex">
                      <div className="number">
                        <p className="d-flex justify-content-center align-items-center">
                          01
                        </p>
                      </div>
                      <div className="mid_heading">
                        <p>
                          Save Time to Do <br /> More
                        </p>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Streamline your HR operations & empower your team to
                        accomplish more with a cutting-edge software solution.
                      </p>
                    </div>
                  </div>
                  <div className="common_card_div bg-white background_image_02 common_card_width">
                    <div className="d-flex">
                      <div className="number">
                        <p className="d-flex justify-content-center align-items-center">
                          02
                        </p>
                      </div>
                      <div className="mid_heading">
                        <p>
                          Reduce Human <br /> Errors
                        </p>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Ensure error-free human resource operations with an
                        advanced set of tools for enhanced accuracy &
                        efficiency!
                      </p>
                    </div>
                  </div>
                  <div className="common_card_div bg-white background_image_03 common_card_width">
                    <div className="d-flex">
                      <div className="number">
                        <p className="d-flex justify-content-center align-items-center">
                          03
                        </p>
                      </div>
                      <div className="mid_heading">
                        <p>
                          Create Unbeatable <br /> Culture
                        </p>
                      </div>
                    </div>
                    <div className="detail_text">
                      <p>
                        Foster an unbeatable company culture with an integrated
                        HR solution tailored to your organization's needs!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="form_section d-flex justify-content-center align-items-center width_100">
          <div className="width_80 section_width_100_on_mobile">
            <div className="d-flex justify-content-center">
              <img
                src={boypic}
                alt="boy_pic"
                className="pic_width_on_tab picture_hidden"
              />
              <div className="form_felid_section d-flex justify-content-center py-5 width_100 position-relative">
                <div className="purple_bubble_div d-lg-block d-none">
                  <div className="purple_bubble"></div>
                </div>
                <div className="yellow-bubble_div d-lg-block d-none">
                  <div className="yellow_bubble"></div>
                </div>
                <div className="width_80">
                  <div className="form_title strip_background text-md-start text-center">
                    <p>Want the Inside Secret on People Operations?</p>
                  </div>
                  <div className="form_subtitle mt-5 text-md-start text-center">
                    <p>Watch AutomotoHR in action</p>
                  </div>
                  <form className="mt-5" action="/action_page.php">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name*"
                        name="name"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Email*"
                        name="email"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        id="phone-number"
                        placeholder="Phone Number*"
                        name="phone_number"
                      />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group mt-4">
                          <input
                            type="text"
                            className="form-control"
                            id="title"
                            placeholder="title*"
                            name="title"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <select
                          class="form-select select-box mt-4"
                          aria-label="Default select example"
                        >
                          <option selected>Employee Count*</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group mt-4">
                      <input
                        type="text"
                        className="form-control"
                        id="company-name"
                        placeholder="Company Name*"
                        name="phone_number"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <textarea
                        type="text"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                        name="Message"
                        rows="3"
                      />
                    </div>
                    <button className="form_button text-white w-100 mt-4 py-3">
                      Schedule Your No Obligation Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="footer_section width_100 d-flex flex-column justify-content-center align-items-center auto-footer-background-color position_relative">
          <div className="partner_button width_80 d-flex justify-content-between align-items-center px-5 text-white position_absolute_form">
            <div className="width_100 px-5 d-flex justify-content-between align-items-center flex-md-row flex-column">
              <p className="width_550px">
                Can we send you a check every month?
              </p>
              <button className="partner_btn py-3 z-3">
                Become a Partners
              </button>
            </div>
            <div className="partner_bubble"></div>
            <div className="partner_bubble_pink position_absolute"></div>
          </div>
          <div className="footer_items_section width_80 pt-5 d-flex justify-content-lg-between justify-content-md-center flex-wrap align-items-lg-start align-items-center width_on_LDesktop col_gap">
            <div>
              <div className="footer_logo mt-4 width_227px">
                <img src={footer_logo} alt="footer-logo" />
                <div className="text-white text-end">
                  <p>Hire & Manage Great People AutomotoHR.com</p>
                </div>
              </div>
              <div className="mt-5 text-lg-start text-center">
                <div className="stay_connect text-white">
                  <p>Stay Connect</p>
                </div>
                <div className="d-flex align-items-center justify-content-lg-start justify-content-center gap-1">
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <a>
                      <FontAwesomeIcon icon="fa-brands fa-youtube" size="lg" />
                    </a>
                  </div>
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <a>
                      <FontAwesomeIcon
                        icon="fa-brands fa-instagram"
                        size="lg"
                      />
                    </a>
                  </div>
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <a>
                      <FontAwesomeIcon icon="fa-brands fa-twitter" size="lg" />
                    </a>
                  </div>
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <a>
                      <FontAwesomeIcon icon="fa-brands fa-facebook" size="lg" />
                    </a>
                  </div>
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <a>
                      <FontAwesomeIcon
                        icon="fa-brands fa-linkedin-in"
                        size="lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="list_style_none">
              <ul className="mt-5 text-lg-start text-center">
                <li>Solutions</li>
                <li>Privacy Policy</li>
                <li>Login</li>
              </ul>
            </div>
            <div className="list_style_none">
              <ul className="mt-5 text-lg-start text-center">
                <li>Contact Us</li>
                <li>Site Map</li>
                <li>Affiliate Partner Login</li>
                <li>Can we send you a check every month?</li>
                <li>Join our automotoHR affiliate program now!</li>
              </ul>
            </div>
            <div className="mt-5 text-lg-start text-center">
              <div className="Sales-Support-heading text-white">
                <p>Sales Support</p>
              </div>
              <div className="d-flex justify-content-lg-start justify-content-center align-items-center gap-2 mt-4">
                <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                  <i>
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                  </i>
                </div>
                <div className="phone-number">
                  <a href="" className="text-white anchar_tag">
                    <p>(888) 794-0794 Ext 1</p>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-4">
                <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                  <i>
                    <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  </i>
                </div>
                <div className="mail-to">
                  <a href="" className="text-white anchar_tag">
                    <p>accounts@automotohr.com</p>
                  </a>
                </div>
              </div>
              <div className="mt-5 text-lg-start text-center">
                <div className="Sales-Support-heading text-white">
                  <p>Technical Support</p>
                </div>
                <div className="d-flex justify-content-lg-start justify-content-center align-items-center gap-2">
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-phone" />
                    </i>
                  </div>
                  <div className="phone-number">
                    <a href="" className="text-white anchar_tag">
                      <p>(888) 794-0794 Ext 1</p>
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 mt-4">
                  <div className="auto-fa-icon-common d-flex justify-content-center align-items-center rounded-circle">
                    <i>
                      <FontAwesomeIcon icon="fa-solid fa-envelope" />
                    </i>
                  </div>
                  <div className="mail-to">
                    <a href="" className="text-white anchar_tag">
                      <p>accounts@automotohr.com</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center copyright_section_footer text-white mt-5 pt-4 width_80 width_on_LDesktop">
            <p>© 2023 AutomotoHR. All Rights Reserved.</p>
            <div className="d-flex align-items-center">
              <p className="text-white powered_by_heading">Powered by</p>
              <img
                src={footer_logo}
                alt="footer_logo"
                className="auto-copy-right-common"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;

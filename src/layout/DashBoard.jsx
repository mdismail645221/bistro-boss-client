import { NavLink, Outlet } from "react-router-dom";
import "../pages/DashBoard/style/Dashboard.css";
import { Helmet } from "react-helmet";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  //TODO ALL USER ROLE IMPLEMENT
  // const isAdmin = true;

  const [isAdmin, isAdminLoading] = useAdmin();
 console.log('isAdmin deshbaord', isAdmin)
  

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* Page content here */}

          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="deshboard_menu_items menu p-4 w-80 min-h-full bg-base-200 text-base-content bg-[#D1A054] text-[#fff]">
            {/* Sidebar content here */}
            <div className="sidebar-logo-wrapper flex flex-col items-center py-16 px-3">
              <h3 className="text-[#fff]">BISTRO BOSS</h3>
              <p className="text-[#fff]">Restaurant</p>
            </div>

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/deshboard/aaa">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_42_1090)">
                        <path
                          d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_42_1090">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addItems">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z"
                        fill="#151515"
                      />
                      <path
                        d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z"
                        fill="#151515"
                      />
                    </svg>
                    add items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageItems">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.7914 3.01252H8.2336C7.01579 3.01252 6.02499 4.00331 6.02499 5.22263C6.02499 6.44044 7.01579 7.43124 8.2336 7.43124H21.7914C23.0092 7.43124 24 6.44044 24 5.22263C24 4.00327 23.0092 3.01252 21.7914 3.01252Z"
                        fill="#151515"
                      />
                      <path
                        d="M2.20941 3.01252C0.991172 3.01252 0 4.00364 0 5.22188C0 6.44011 0.991172 7.43124 2.20941 7.43124C3.42764 7.43124 4.41877 6.44011 4.41877 5.22188C4.41877 4.00364 3.42764 3.01252 2.20941 3.01252Z"
                        fill="#151515"
                      />
                      <path
                        d="M2.20941 9.79064C0.991172 9.79064 0 10.7818 0 12C0 13.2182 0.991172 14.2094 2.20941 14.2094C3.42764 14.2094 4.41877 13.2182 4.41877 12C4.41877 10.7818 3.42764 9.79064 2.20941 9.79064Z"
                        fill="#151515"
                      />
                      <path
                        d="M2.20941 16.5688C0.991172 16.5688 0 17.5599 0 18.7781C0 19.9964 0.991172 20.9875 2.20941 20.9875C3.42764 20.9875 4.41877 19.9964 4.41877 18.7781C4.41877 17.5599 3.42764 16.5688 2.20941 16.5688Z"
                        fill="#151515"
                      />
                      <path
                        d="M21.7914 9.79064H8.2336C7.01579 9.79064 6.02499 10.7814 6.02499 12.0008C6.02499 13.2186 7.01579 14.2094 8.2336 14.2094H21.7914C23.0092 14.2094 24 13.2186 24 12.0008C24 10.7814 23.0092 9.79064 21.7914 9.79064Z"
                        fill="#151515"
                      />
                      <path
                        d="M21.7914 16.5688H8.2336C7.01579 16.5688 6.02499 17.5596 6.02499 18.7789C6.02499 19.9967 7.01579 20.9875 8.2336 20.9875H21.7914C23.0092 20.9875 24 19.9967 24 18.7789C24 17.5596 23.0092 16.5688 21.7914 16.5688Z"
                        fill="#151515"
                      />
                    </svg>
                    manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="allUsers">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_42_1182)">
                        <path
                          d="M12 9.68583C14.2523 9.68583 16.0781 7.85999 16.0781 5.6077C16.0781 3.35542 14.2523 1.52958 12 1.52958C9.74771 1.52958 7.92188 3.35542 7.92188 5.6077C7.92188 7.85999 9.74771 9.68583 12 9.68583Z"
                          fill="#151515"
                        />
                        <path
                          d="M20.25 9.68578C21.6739 9.68578 22.8281 8.53152 22.8281 7.10766C22.8281 5.6838 21.6739 4.52953 20.25 4.52953C18.8261 4.52953 17.6719 5.6838 17.6719 7.10766C17.6719 8.53152 18.8261 9.68578 20.25 9.68578Z"
                          fill="#151515"
                        />
                        <path
                          d="M3.75 9.68578C5.17386 9.68578 6.32812 8.53152 6.32812 7.10766C6.32812 5.6838 5.17386 4.52953 3.75 4.52953C2.32614 4.52953 1.17188 5.6838 1.17188 7.10766C1.17188 8.53152 2.32614 9.68578 3.75 9.68578Z"
                          fill="#151515"
                        />
                        <path
                          d="M6.29016 12.001C5.27531 11.1695 4.35623 11.2796 3.18281 11.2796C1.42781 11.2796 0 12.699 0 14.4432V19.5624C0 20.3199 0.618281 20.9358 1.37859 20.9358C4.66106 20.9358 4.26562 20.9952 4.26562 20.7943C4.26562 17.1668 3.83597 14.5066 6.29016 12.001Z"
                          fill="#151515"
                        />
                        <path
                          d="M13.1161 11.2983C11.0665 11.1273 9.28506 11.3003 7.74845 12.5686C5.17703 14.6283 5.67189 17.4015 5.67189 20.7942C5.67189 21.6918 6.4022 22.4358 7.31345 22.4358C17.2079 22.4358 17.6017 22.755 18.1885 21.4556C18.3809 21.0162 18.3281 21.1559 18.3281 16.9523C18.3281 13.6136 15.4372 11.2983 13.1161 11.2983Z"
                          fill="#151515"
                        />
                        <path
                          d="M20.8172 11.2795C19.6373 11.2795 18.7233 11.1706 17.7098 12.0009C20.1457 14.4879 19.7344 16.9666 19.7344 20.7942C19.7344 20.9964 19.4061 20.9358 22.5722 20.9358C23.3597 20.9358 24 20.2978 24 19.5136V14.4431C24 12.6989 22.5722 11.2795 20.8172 11.2795Z"
                          fill="#151515"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_42_1182">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    all userss
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="flex-row">
                  <NavLink to="/deshboard/mycart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_42_554)">
                        <path
                          d="M10.5938 23.7512C11.7587 23.7512 12.7031 22.8068 12.7031 21.6418C12.7031 20.4769 11.7587 19.5325 10.5938 19.5325C9.42877 19.5325 8.48438 20.4769 8.48438 21.6418C8.48438 22.8068 9.42877 23.7512 10.5938 23.7512Z"
                          fill="white"
                        />
                        <path
                          d="M17.6719 23.7512C18.8369 23.7512 19.7812 22.8068 19.7812 21.6418C19.7812 20.4769 18.8369 19.5325 17.6719 19.5325C16.5069 19.5325 15.5625 20.4769 15.5625 21.6418C15.5625 22.8068 16.5069 23.7512 17.6719 23.7512Z"
                          fill="white"
                        />
                        <path
                          d="M0.703121 4.06376H3.63528L7.02985 15.9471L6.7636 16.4796C6.06254 17.8802 7.08024 19.5324 8.6505 19.5324H20.4843C20.8729 19.5324 21.1874 19.2179 21.1874 18.8293C21.1874 18.4407 20.8729 18.1262 20.4843 18.1262H8.6505C8.12836 18.1262 7.78711 17.5764 8.02153 17.1086L8.21587 16.7199H20.4843C20.798 16.7199 21.0741 16.5119 21.1606 16.2098L23.9731 6.36606C24.0335 6.1539 23.991 5.9259 23.8584 5.74947C23.7252 5.57369 23.5172 5.47 23.2968 5.47H5.49948L4.84169 3.16766C4.75516 2.86555 4.47916 2.65747 4.16533 2.65747H0.703121C0.314483 2.65747 0 2.97195 0 3.36059C0 3.74923 0.314483 4.06376 0.703121 4.06376Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_42_554">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.699463)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    My Cart
                    <span className="badge badge-secondary">
                      +{cart?.length}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_42_1138)">
                    <path
                      d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z"
                      fill="#151515"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_1138">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_42_1143)">
                    <path
                      d="M1.45898 5.92934H22.5414C23.3458 5.92934 24 5.27516 24 4.4707C24 3.66624 23.3458 3.01172 22.5414 3.01172H1.45898C0.654525 3.01172 0 3.66624 0 4.4707C0 5.27516 0.654525 5.92934 1.45898 5.92934Z"
                      fill="#151515"
                    />
                    <path
                      d="M22.5414 10.541H1.45898C0.654525 10.541 0 11.1955 0 12C0 12.8045 0.654525 13.4586 1.45898 13.4586H22.5414C23.3458 13.4586 24 12.8045 24 12C24 11.1955 23.3458 10.541 22.5414 10.541Z"
                      fill="#151515"
                    />
                    <path
                      d="M22.5414 18.0703H1.45898C0.654525 18.0703 0 18.7252 0 19.5296C0 20.3341 0.654525 20.9883 1.45898 20.9883H22.5414C23.3458 20.9883 24 20.3341 24 19.5296C24 18.7252 23.3458 18.0703 22.5414 18.0703Z"
                      fill="#151515"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_1143">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                MENU
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V6H6.8775C6.24609 5.99934 5.63874 6.24222 5.18191 6.6781C4.72508 7.11398 4.45396 7.70925 4.425 8.34L3.8325 20.6775C3.81731 21.0093 3.86946 21.3407 3.98579 21.6517C4.10213 21.9628 4.28025 22.2471 4.50941 22.4875C4.73857 22.7278 5.01404 22.9193 5.3192 23.0504C5.62436 23.1814 5.95289 23.2493 6.285 23.25H17.715C18.0471 23.2493 18.3756 23.1814 18.6808 23.0504C18.986 22.9193 19.2614 22.7278 19.4906 22.4875C19.7198 22.2471 19.8979 21.9628 20.0142 21.6517C20.1305 21.3407 20.1827 21.0093 20.1675 20.6775L19.575 8.34C19.546 7.70925 19.2749 7.11398 18.8181 6.6781C18.3613 6.24222 17.7539 5.99934 17.1225 6H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2043 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V6H9V5.25ZM7.77 9.1425C7.77 8.99416 7.81399 8.84916 7.8964 8.72582C7.97881 8.60249 8.09594 8.50636 8.23299 8.44959C8.37003 8.39283 8.52083 8.37797 8.66632 8.40691C8.8118 8.43585 8.94544 8.50728 9.05033 8.61217C9.15522 8.71706 9.22665 8.8507 9.25559 8.99618C9.28453 9.14167 9.26967 9.29247 9.21291 9.42951C9.15614 9.56656 9.06001 9.68369 8.93668 9.7661C8.81334 9.84851 8.66834 9.8925 8.52 9.8925C8.32109 9.8925 8.13032 9.81348 7.98967 9.67283C7.84902 9.53218 7.77 9.34141 7.77 9.1425ZM14.73 9.1425C14.73 8.99416 14.774 8.84916 14.8564 8.72582C14.9388 8.60249 15.0559 8.50636 15.193 8.44959C15.33 8.39283 15.4808 8.37797 15.6263 8.40691C15.7718 8.43585 15.9054 8.50728 16.0103 8.61217C16.1152 8.71706 16.1866 8.8507 16.2156 8.99618C16.2445 9.14167 16.2297 9.29247 16.1729 9.42951C16.1161 9.56656 16.02 9.68369 15.8967 9.7661C15.7733 9.84851 15.6283 9.8925 15.48 9.8925C15.2811 9.8925 15.0903 9.81348 14.9497 9.67283C14.809 9.53218 14.73 9.34141 14.73 9.1425Z"
                    fill="#151515"
                  />
                </svg>
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.6942 15.0319C12.4675 15.1735 12.2125 15.2302 11.9858 15.2302C11.7591 15.2302 11.5041 15.1735 11.2774 15.0319L0 8.14639V17.2987C0 19.2538 1.58678 20.8406 3.54191 20.8406H20.4581C22.4132 20.8406 24 19.2538 24 17.2987V8.14639L12.6942 15.0319Z"
                    fill="#151515"
                  />
                  <path
                    d="M20.4581 3.15939H3.54191C1.87013 3.15939 0.453366 4.34948 0.113342 5.93625L12.0142 13.1901L23.8867 5.93625C23.5466 4.34948 22.1299 3.15939 20.4581 3.15939Z"
                    fill="#151515"
                  />
                </svg>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;

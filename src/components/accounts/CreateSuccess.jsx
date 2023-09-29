import useQuery from "../../hooks/useQuery";
import { links } from "../../utils/routes";
import { acctTypes } from "../../utils/vars";
import C404 from "../404";
import CreateLinks from "../CreateLinks";

function CreateSuccess(props) {
  const query = useQuery();
  const type = query.get("type");
  if (!type || !acctTypes[type]) return <C404 />;

  return (
    <div className="success-page">
      <svg
        width="156"
        height="156"
        viewBox="0 0 156 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2227_17090)">
          <path
            d="M155.592 76.1178C155.459 75.8232 152.625 69.6107 148.144 64.1121C150.179 57.3146 150.42 50.486 150.429 50.1649C150.473 48.8484 149.947 47.5809 148.987 46.6836C148.751 46.4606 143.447 41.8053 137.208 38.4401C136.485 31.3839 134.097 24.9837 133.981 24.6803C133.517 23.453 132.548 22.4844 131.321 22.0204C131.018 21.9043 124.617 19.2118 117.561 18.4888C114.196 12.2449 109.537 7.24628 109.318 7.00954C108.416 6.0501 107.082 5.37157 105.836 5.57235C105.515 5.58119 98.6865 5.82219 91.8893 7.85748C86.3904 3.3765 80.1776 0.542336 79.8829 0.408276C79.2848 0.136193 78.6423 0 77.9997 0C77.3571 0 76.7142 0.136193 76.1161 0.408276C75.8215 0.542032 69.609 3.3762 64.1104 7.85717C57.3129 5.82189 50.4843 5.58088 50.1632 5.57205C48.8375 5.3801 47.5792 6.04949 46.6819 7.00924C46.4631 7.24567 41.8036 12.2446 38.4384 18.4885C31.3822 19.2115 24.982 21.904 24.6786 22.0201C23.4513 22.4841 22.4827 23.4527 22.0187 24.68C21.9026 24.9834 19.2101 31.3836 18.4871 38.4398C12.2432 41.805 7.24458 46.4645 7.00784 46.6833C6.05266 47.5848 5.52617 48.8523 5.57065 50.1646C5.57949 50.486 5.82049 57.3146 7.85578 64.1118C3.3748 69.6104 0.540633 75.8232 0.406877 76.1175C-0.133022 77.3137 -0.133022 78.6884 0.406877 79.8843C0.540633 80.1789 3.3748 86.3914 7.85578 91.8901C5.82049 98.6875 5.57949 105.516 5.57065 105.837C5.52617 107.15 6.05266 108.417 7.00784 109.319C7.24428 109.537 12.2432 114.197 18.4871 117.562C19.2101 124.618 21.9026 131.018 22.0187 131.322C22.4827 132.549 23.4513 133.518 24.6831 133.982C24.9866 134.098 31.3822 136.486 38.4384 137.209C41.8036 143.448 46.4585 148.752 46.6819 148.988C47.5789 149.947 48.8555 150.55 50.1632 150.429C50.4846 150.421 57.3132 150.18 64.1061 148.144C69.6093 152.621 75.8218 155.459 76.1164 155.593C76.7118 155.864 77.3562 155.999 78 155.999C78.6444 155.999 79.2888 155.864 79.8835 155.593C80.1782 155.459 86.3907 152.621 91.8893 148.144C98.6868 150.18 105.515 150.421 105.836 150.429C107.18 150.541 108.416 149.947 109.318 148.988C109.541 148.752 114.196 143.753 117.561 137.513C124.617 136.79 131.013 134.098 131.317 133.982C132.548 133.518 133.517 132.549 133.981 131.322C134.097 131.018 136.79 124.618 137.513 117.562C143.752 114.197 148.751 109.542 148.987 109.319C149.947 108.422 150.473 107.154 150.429 105.837C150.42 105.516 150.179 98.6872 148.144 91.8901C152.625 86.3914 155.459 80.1786 155.592 79.8843C156.132 78.6884 156.132 77.3137 155.592 76.1178Z"
            fill="#F3F5F9"
          />
          <path
            d="M79.8852 155.594C80.1798 155.46 86.3923 152.621 91.8909 148.145C98.6884 150.18 105.517 150.421 105.838 150.43C107.181 150.542 108.418 149.948 109.319 148.989C109.542 148.752 114.198 143.753 117.563 137.514C124.619 136.791 131.015 134.098 131.318 133.982C132.55 133.518 133.519 132.55 133.983 131.322C134.099 131.019 136.791 124.619 137.514 117.563C143.754 114.197 148.752 109.542 148.989 109.319C149.948 108.422 150.475 107.155 150.43 105.838C150.422 105.516 150.181 98.6878 148.145 91.8907C152.626 86.392 155.46 80.1792 155.594 79.8849C156.134 78.6887 156.134 77.314 155.594 76.1181C155.46 75.8235 152.626 69.611 148.145 64.1124C150.181 57.3149 150.422 50.4863 150.43 50.1652C150.475 48.8487 149.948 47.5812 148.989 46.6839C148.752 46.4609 143.449 41.8056 137.21 38.4404C136.487 31.3842 134.099 24.984 133.983 24.6806C133.519 23.4533 132.55 22.4847 131.323 22.0207C131.019 21.9046 124.619 19.2121 117.563 18.4891C114.198 12.2452 109.538 7.24659 109.319 7.00985C108.418 6.0504 107.083 5.37187 105.838 5.57266C105.517 5.58149 98.6881 5.8225 91.8909 7.85778C86.3926 3.3765 80.1798 0.542336 79.8852 0.408276C79.2871 0.136193 78.6445 0 78.002 0V156C78.6464 156 79.2905 155.864 79.8852 155.594Z"
            fill="#E1E6F0"
          />
          <path
            d="M139.651 87.7308C142.668 84.5219 145.074 80.3754 146.323 78.001C145.073 75.6266 142.668 71.4805 139.651 68.2713C138.455 66.9949 138.089 65.1559 138.705 63.5225C140.267 59.3986 140.901 54.6409 141.146 51.9719C139.084 50.2581 134.968 47.3438 130.951 45.5361C129.358 44.8177 128.318 43.2555 128.26 41.5057C128.126 37.0738 126.894 32.4591 126.1 29.9061C123.538 29.1118 118.901 27.8754 114.496 27.7417C112.746 27.6838 111.184 26.6393 110.465 25.0504C108.657 21.0292 105.743 16.9175 104.029 14.8554C101.36 15.101 96.6027 15.7347 92.4788 17.2968C90.8631 17.9172 89.0154 17.5601 87.73 16.3508C84.5211 13.3338 80.3746 10.928 78.0002 9.67853C75.6258 10.9283 71.4797 13.3338 68.2705 16.3508C66.9896 17.5512 65.1374 17.9083 63.5217 17.2968C59.3978 15.7347 54.6402 15.101 51.9711 14.8554C50.2573 16.9175 47.343 21.0292 45.5353 25.0504C44.8169 26.6393 43.2547 27.6838 41.505 27.7417C37.073 27.8754 32.4583 29.1073 29.9054 29.9019C29.111 32.4637 27.8746 37.1009 27.7409 41.5061C27.683 43.2555 26.6385 44.8177 25.0496 45.5364C21.0284 47.3441 16.9167 50.2584 14.8546 51.9722C15.1002 54.6413 15.7339 59.3989 17.296 63.5228C17.9118 65.1562 17.5459 66.9949 16.35 68.2716C13.333 71.4805 10.9272 75.6269 9.67773 78.0013C10.9275 80.3757 13.333 84.5219 16.35 87.7311C17.5462 89.0074 17.9121 90.8465 17.296 92.4799C15.7339 96.6038 15.1002 101.361 14.8546 104.03C16.9167 105.744 21.0284 108.659 25.0496 110.466C26.6385 111.185 27.683 112.747 27.7409 114.497C27.8746 118.929 29.1065 123.543 29.9011 126.096C32.4629 126.891 37.1001 128.127 41.5098 128.265C43.2551 128.319 44.8169 129.363 45.5356 130.952C47.3433 134.969 50.2576 139.085 51.9714 141.147C54.6405 140.901 59.3935 140.268 63.5177 138.706C65.1737 138.083 67.0073 138.471 68.2619 139.647C71.4754 142.664 75.6261 145.07 78.0005 146.324C80.3749 145.07 84.5256 142.669 87.7346 139.652C89.0066 138.451 90.8588 138.094 92.4788 138.706C96.6027 140.268 101.36 140.902 104.029 141.147C105.743 139.085 108.657 134.969 110.465 130.952C111.184 129.363 112.746 128.319 114.491 128.266C118.896 128.127 123.533 126.891 126.095 126.097C126.889 123.535 128.126 118.902 128.26 114.497C128.317 112.747 129.358 111.185 130.951 110.467C134.968 108.659 139.084 105.745 141.146 104.031C140.9 101.362 140.267 96.6041 138.704 92.4802C138.089 90.8462 138.455 89.0071 139.651 87.7308Z"
            fill="#86BCDB"
          />
          <path
            d="M92.4808 138.705C96.6047 140.267 101.362 140.901 104.031 141.147C105.745 139.085 108.66 134.969 110.467 130.952C111.186 129.363 112.748 128.318 114.493 128.265C118.898 128.127 123.535 126.89 126.097 126.096C126.891 123.534 128.128 118.902 128.262 114.496C128.32 112.747 129.36 111.185 130.953 110.466C134.97 108.658 139.086 105.744 141.148 104.03C140.902 101.361 140.269 96.6036 138.706 92.4797C138.091 90.8463 138.457 89.0075 139.653 87.7309C142.67 84.522 145.075 80.3755 146.325 78.0012C145.075 75.6268 142.67 71.4806 139.653 68.2714C138.456 66.9951 138.09 65.156 138.706 63.5226C140.269 59.3987 140.902 54.6411 141.148 51.9721C139.086 50.2582 134.97 47.3439 130.953 45.5362C129.36 44.8178 128.32 43.2557 128.262 41.5059C128.128 37.074 126.896 32.4592 126.101 29.9063C123.54 29.112 118.902 27.8756 114.497 27.7418C112.748 27.6839 111.186 26.6395 110.467 25.0505C108.659 21.0293 105.745 16.9176 104.031 14.8555C101.362 15.1011 96.6044 15.7348 92.4805 17.297C90.8648 17.9173 89.0172 17.5602 87.7317 16.3509C84.5228 13.3339 80.3764 10.9282 78.002 9.67865V146.324C80.3764 145.07 84.5271 142.669 87.736 139.652C89.0086 138.451 90.8608 138.094 92.4808 138.705Z"
            fill="#0E79B7"
          />
          <path
            d="M113.55 59.9482L100.62 47.0229C98.835 45.2378 95.9427 45.2378 94.1575 47.0229L78.0011 63.1821L68.8606 72.3241L61.8401 65.3036C60.0549 63.5185 57.1626 63.5185 55.3774 65.3036L42.4521 78.2289C40.667 80.014 40.667 82.9064 42.4521 84.6915L65.6291 107.868C67.4142 109.654 70.3066 109.654 72.0917 107.868L78.0011 101.959L113.55 66.4102C114.407 65.5531 114.889 64.3929 114.889 63.179C114.889 61.9652 114.407 60.8053 113.55 59.9482Z"
            fill="#F3F5F9"
          />
          <path
            d="M114.89 63.1795C114.89 61.9656 114.408 60.8051 113.551 59.9483L100.621 47.023C98.8359 45.2379 95.9435 45.2379 94.1584 47.023L78.002 63.1822V101.96L113.551 66.4106C114.408 65.5539 114.89 64.3933 114.89 63.1795Z"
            fill="#E1E6F0"
          />
        </g>
        <defs>
          <clipPath id="clip0_2227_17090">
            <rect width="156" height="156" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <br />
      <br />
      <h2 className="tb-regular f600 t-blue">
        {type[0].toUpperCase()}
        {type.slice(1)} Successfully Created
      </h2>
      <br />
      <br />
      <div className="success-create">
        <CreateLinks
          created={type}
          options={[
            {
              title: "User",
              to: links.accounts.add(acctTypes.user),
            },
            {
              title: "Dispatcher",
              to: links.accounts.add(acctTypes.dispatcher),
            },
            {
              title: "Admin",
              to: links.accounts.add(acctTypes.admin),
            },
            {
              title: "Staff",
              to: links.accounts.add(acctTypes.staff),
            },
            {
              title: "Department",
              to: links.accounts.add(acctTypes.department),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CreateSuccess;
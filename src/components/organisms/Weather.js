import React from "react";
export default function Weather() {
  return (
    <div class="d-flex justify-content-end">
      <div class="">
        <span class="mr-3">13:00-15:00</span>
        <span>
          <svg
            class="mr-2 mb-2"
            width="25"
            height="19"
            viewBox="0 0 31 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.1136 0.0635869C10.8692 0.15285 10.6141 0.37833 10.4875 0.616937C10.381 0.817728 10.374 0.896894 10.3585 2.07741C10.3394 3.53616 10.3719 3.77361 10.6331 4.08098C10.877 4.368 11.1305 4.48963 11.4848 4.48963C11.9865 4.48963 12.4142 4.18655 12.5482 3.73625C12.5849 3.61275 12.605 3.06708 12.6043 2.21181C12.6033 1.02185 12.5933 0.858169 12.5102 0.677775C12.2613 0.137502 11.6488 -0.131903 11.1136 0.0635869ZM18.711 2.50928C18.6086 2.5575 18.0341 3.08359 17.4234 3.68848C16.3664 4.73556 16.3174 4.79276 16.2365 5.07297C16.1647 5.32188 16.1612 5.40594 16.2131 5.6394C16.2853 5.96429 16.5374 6.2757 16.841 6.41494C17.1029 6.53516 17.5338 6.53445 17.7933 6.41348C17.9216 6.35375 18.3764 5.92991 19.0547 5.23817C20.0508 4.22235 20.1206 4.13884 20.1978 3.87125C20.322 3.44079 20.21 3.01785 19.8907 2.7126C19.5888 2.42401 19.0791 2.33616 18.711 2.50928ZM3.4898 3.28594C2.93206 3.56403 2.72519 4.3057 3.0505 4.86082C3.22699 5.16203 4.91455 6.82511 5.18257 6.96198C5.36352 7.05443 5.46577 7.07144 5.74432 7.05559C6.18266 7.03065 6.44657 6.85757 6.65574 6.45781C6.78095 6.2185 6.79714 6.1416 6.77544 5.89068C6.7596 5.70791 6.70361 5.52085 6.62426 5.38579C6.47684 5.13482 4.68332 3.38197 4.44919 3.26004C4.21696 3.13907 3.75957 3.15139 3.4898 3.28594ZM10.8059 5.95621C9.52223 6.11838 8.30099 6.71767 7.38546 7.63474C5.23575 9.78791 5.05976 13.1534 6.97764 15.4314C7.12305 15.6041 7.24205 15.7574 7.24205 15.7721C7.24205 15.7868 7.16571 15.9067 7.07237 16.0387C6.45569 16.9106 6.14441 18.0675 6.20707 19.2548C6.33444 21.6692 7.56189 23.5035 9.53561 24.229C10.3985 24.5462 10.0365 24.5334 18.1623 24.5332C24.4311 24.5331 25.6321 24.5217 26.0167 24.4589C27.2026 24.2651 28.1397 23.7948 28.9244 22.9994C30.6316 21.2691 30.6247 18.7214 28.907 16.6338C28.3023 15.8988 27.3678 15.2867 26.4602 15.031L26.0544 14.9167L25.9968 14.2032C25.8673 12.599 25.3251 11.3411 24.2845 10.2308C23.6796 9.58535 23.1671 9.2025 22.4068 8.82813C20.7238 7.99936 18.7665 7.96044 17.0461 8.72149L16.7501 8.85251L16.6702 8.73023C15.7448 7.31353 14.3185 6.33371 12.7362 6.0279C12.2266 5.92935 11.2927 5.89466 10.8059 5.95621ZM12.5302 8.29861C13.3553 8.51343 14.2167 9.1309 14.6884 9.84556L14.9205 10.1973L14.6462 10.5368C14.0728 11.2468 13.6393 12.0887 13.4269 12.9051L13.2964 13.4067L12.362 13.4073C11.5697 13.4078 11.3513 13.4255 10.9273 13.5232C10.3169 13.6639 9.84624 13.831 9.33787 14.0877L8.95251 14.2823L8.70108 13.9982C7.86761 13.0562 7.65172 11.6343 8.15813 10.422C8.5278 9.53713 9.37607 8.71791 10.2519 8.39989C10.8898 8.1683 11.8635 8.12503 12.5302 8.29861ZM20.6254 10.4742C21.8071 10.7818 22.8424 11.6408 23.3616 12.7444C23.6902 13.4432 23.754 13.7397 23.7525 14.562C23.7513 15.2204 23.7369 15.3271 23.5417 16.1185C23.4264 16.5857 23.3321 16.9947 23.3322 17.0272C23.3322 17.0708 23.6457 17.0864 24.5227 17.0864C25.8645 17.0864 25.9882 17.1097 26.5343 17.4652C27.1127 17.8418 27.592 18.4726 27.8204 19.1581C27.9376 19.5096 27.9517 19.6195 27.9335 20.0397C27.9162 20.4368 27.8877 20.5719 27.7688 20.8225C27.5558 21.2712 27.0981 21.7096 26.5822 21.9588C25.804 22.3348 26.2947 22.3151 18.0558 22.3001L10.6756 22.2867L10.3749 22.1716C9.53185 21.8492 8.97076 21.2238 8.64078 20.2392C8.5071 19.8402 8.47703 19.6632 8.45677 19.1564C8.42805 18.4366 8.4863 18.1016 8.72249 17.6285C9.05857 16.9554 9.63316 16.4047 10.3749 16.045C10.9893 15.747 11.467 15.6388 12.2044 15.6306C12.9969 15.6219 13.3407 15.6998 14.5322 16.1581C15.0293 16.3493 15.4669 16.5058 15.5047 16.5058C15.5475 16.5058 15.5617 16.4749 15.5423 16.424C15.5252 16.3789 15.4974 15.828 15.4805 15.1996C15.4523 14.1442 15.4581 14.023 15.5571 13.6089C15.7555 12.7787 16.1968 12.0126 16.7928 11.464C17.3542 10.9472 18.1846 10.5327 18.9235 10.4004C19.3041 10.3323 20.2352 10.3727 20.6254 10.4742ZM0.920297 10.8407C0.127221 11.258 0.140655 12.4017 0.943705 12.8343C1.14456 12.9425 1.20125 12.9464 2.55537 12.9464C3.90378 12.9464 3.96694 12.9421 4.16413 12.8358C4.27701 12.7749 4.43816 12.6462 4.52222 12.5498C4.98307 12.0211 4.81806 11.171 4.19044 10.8407L3.92238 10.6997H2.55537H1.18836L0.920297 10.8407Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
          27° C
        </span>
      </div>
    </div>
  );
}

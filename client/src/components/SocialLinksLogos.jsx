import React, { memo } from "react";
import { useTheme } from "styled-components";
import { lightTheme } from "../styles/themes";

const SocialLinksLogos = memo(({ name }) => {
  const size = "18px";
  const theme = useTheme();

  switch (name) {
    case "Facebook":
      return (
        <svg
          width={size}
          height={size}
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinejoin: "round",
            strokeMiterlimit: 2,
          }}
          version="1.1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsserif="http://www.serif.com/"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              fill={lightTheme.socialLinkIcon}
              d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
            />
            <path
              fill="#fff"
              fillOpacity={0}
              d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
            />
          </g>
        </svg>
      );
    case "Twitter":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 0c276.1 0 500 223.9 500 500s-223.9 500-500 500S0 776.1 0 500 223.9 0 500 0z"
            fill={lightTheme.socialLinkIcon}
          />
          <path
            d="M384 754c235.8 0 364.9-195.4 364.9-364.9 0-5.5 0-11.1-.4-16.6 25.1-18.2 46.8-40.6 64-66.4-23.4 10.4-48.2 17.2-73.6 20.2 26.8-16 46.8-41.2 56.4-70.9-25.2 14.9-52.7 25.5-81.4 31.1-48.6-51.6-129.8-54.1-181.4-5.6-33.3 31.3-47.4 78-37.1 122.5-103.1-5.2-199.2-53.9-264.3-134-34 58.6-16.7 133.5 39.7 171.2-20.4-.6-40.4-6.1-58.2-16v1.6c0 61 43 113.6 102.9 125.7-18.9 5.1-38.7 5.9-57.9 2.2 16.8 52.2 64.9 88 119.8 89.1-45.4 35.7-101.5 55.1-159.2 55-10.2 0-20.4-.6-30.5-1.9C246.1 734 314.4 754 384 753.9"
            fill="#fff"
            fillOpacity={0}
          />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          width={size}
          height={size}
          id="Layer_1"
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
          />
          <path
            fill="#d8d2d2"
      
            d="M500 220.2c91.1 0 101.9.3 137.9 2 33.3 1.5 51.4 7.1 63.4 11.8 15.9 6.2 27.3 13.6 39.2 25.5s19.3 23.3 25.5 39.2c4.7 12 10.2 30.1 11.8 63.4 1.6 36 2 46.8 2 137.9s-.3 101.9-2 137.9c-1.5 33.3-7.1 51.4-11.8 63.4-6.2 15.9-13.6 27.3-25.5 39.2s-23.3 19.3-39.2 25.5c-12 4.7-30.1 10.2-63.4 11.8-36 1.6-46.8 2-137.9 2s-101.9-.3-137.9-2c-33.3-1.5-51.4-7.1-63.4-11.8-15.9-6.2-27.3-13.6-39.2-25.5-11.9-11.9-19.3-23.3-25.5-39.2-4.7-12-10.2-30.1-11.8-63.4-1.6-36-2-46.8-2-137.9s.3-101.9 2-137.9c1.5-33.3 7.1-51.4 11.8-63.4 6.2-15.9 13.6-27.3 25.5-39.2 11.9-11.9 23.3-19.3 39.2-25.5 12-4.7 30.1-10.2 63.4-11.8 36-1.7 46.8-2 137.9-2m0-61.5c-92.7 0-104.3.4-140.7 2.1-36.3 1.7-61.1 7.4-82.9 15.9C254 185.3 234.9 197 216 216c-19 19-30.6 38-39.4 60.5-8.4 21.7-14.2 46.5-15.9 82.9s-2.1 48-2.1 140.7.4 104.3 2.1 140.7c1.7 36.3 7.4 61.1 15.9 82.9C185.3 746 197 765.1 216 784c19 19 38 30.6 60.5 39.4 21.7 8.4 46.5 14.2 82.9 15.9s48 2.1 140.7 2.1 104.3-.4 140.7-2.1c36.3-1.7 61.1-7.4 82.9-15.9C746 814.7 765.1 803 784 784c19-19 30.6-38 39.4-60.5 8.4-21.7 14.2-46.5 15.9-82.9s2.1-48 2.1-140.7-.4-104.3-2.1-140.7c-1.7-36.3-7.4-61.1-15.9-82.9C814.7 254 803 234.9 784 216c-19-19-38-30.6-60.5-39.4-21.7-8.4-46.5-14.2-82.9-15.9-36.3-1.6-47.9-2-140.6-2z"
          />
          <path
            fill="#d8d2d2"
     
            d="M500 324.7c-96.8 0-175.3 78.5-175.3 175.3S403.2 675.3 500 675.3 675.3 596.8 675.3 500 596.8 324.7 500 324.7zm0 289.1c-62.8 0-113.8-50.9-113.8-113.8s51-113.8 113.8-113.8S613.8 437.1 613.8 500s-51 113.8-113.8 113.8z"
          />
          <circle fill="#d8d2d2"  cx={682.2} cy={317.8} r={41} />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          width={size}
          height={size}
          id="Layer_1"
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
            fill={lightTheme.socialLinkIcon}
          />
          <path
            fill="#fff"
            fillOpacity={0}
            d="M184.2 387.3h132.9V815H184.2V387.3zm66.5-212.6c42.5 0 77 34.5 77 77.1s-34.5 77.1-77 77.1c-42.6 0-77.1-34.5-77.1-77.1-.1-42.5 34.4-77.1 77.1-77.1M400.5 387.3H528v58.4h1.8c17.7-33.6 61-69.1 125.8-69.1 134.6 0 159.5 88.6 159.5 203.7V815H682.2V607.1c0-49.7-.9-113.4-69.1-113.4-69.2 0-79.8 54-79.8 109.8v211.6H400.5V387.3z"
          />
        </svg>
      );
    case "TikTok":
      return (
        <svg
          width={size}
          height={size}
          data-name="Layer 1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256S397.385 0 256 0zm129.62 232.382c-27.184 0-53.634-8.822-74-23.75l-.162 101.5a92.457 92.457 0 11-80.178-91.721v49.845a43.657 43.657 0 1031.288 41.876V109.333h51.275a71.773 71.773 0 0071.774 71.773z"
          />
        </svg>
      );
    case "Pinterest":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
          />
          <path
            fill="#fff"
            fillOpacity={0}
            d="M500.5 150.5c-193.3 0-350 156.7-350 350 0 148.3 92.3 275 222.5 326-3.1-27.7-5.8-70.3 1.2-100.5 6.4-27.3 41-174 41-174s-10.5-21-10.5-52c0-48.7 28.2-85 63.3-85 29.9 0 44.3 22.4 44.3 49.3 0 30-19.1 74.9-29 116.5-8.2 34.8 17.5 63.2 51.8 63.2 62.2 0 110-65.6 110-160.3 0-83.8-60.2-142.4-146.2-142.4-99.6 0-158 74.7-158 151.9 0 30.1 11.6 62.3 26 79.9 2.9 3.5 3.3 6.5 2.4 10-2.7 11.1-8.6 34.8-9.7 39.7-1.5 6.4-5.1 7.8-11.7 4.7-43.7-20.3-71-84.3-71-135.6 0-110.4 80.2-211.8 231.3-211.8 121.4 0 215.8 86.5 215.8 202.1 0 120.8-76 217.9-181.6 217.9-35.5 0-68.8-18.4-80.2-40.2 0 0-17.5 66.8-21.8 83.2-7.9 30.4-29.2 68.5-43.5 91.8 32.7 10.1 67.5 15.6 103.6 15.6 193.3 0 350-156.7 350-350s-156.7-350-350-350z"
          />
        </svg>
      );
    case "YouTube":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
            fill={lightTheme.socialLinkIcon}
          />
          <path
            d="M818.2 339.1c-7.6-28.8-30.1-51.4-58.7-59.1-51.8-14-259.4-14-259.4-14s-207.7 0-259.4 14c-28.6 7.7-51.1 30.3-58.7 59.1-14 52.1-14 160.9-14 160.9s0 108.8 13.9 160.9c7.6 28.8 30.1 51.4 58.7 59.1 51.8 14 259.4 14 259.4 14s207.7 0 259.4-14c28.6-7.7 51.1-30.3 58.7-59.1C832 608.8 832 500 832 500s0-108.8-13.8-160.9zM432.1 598.7V401.3L605.6 500l-173.5 98.7z"
            fill="#fff"
            fillOpacity={0}
          />
        </svg>
      );
    case "Snapchat":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 56.6934 56.6934"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M29.207 4.374c-13.6 0-24.625 11.023-24.625 24.623s11.025 24.625 24.625 24.625c13.598 0 24.624-11.026 24.624-24.625S42.805 4.374 29.207 4.374zm15.31 32.689c-.183.428-1.008 1.035-3.895 1.481-.236.036-.327.344-.468.988a9.953 9.953 0 01-.175.707c-.061.21-.192.309-.412.309h-.036c-.153 0-.37-.028-.646-.082a8.619 8.619 0 00-1.734-.183c-.407 0-.829.035-1.252.105-.866.145-1.601.664-2.38 1.214-1.131.8-2.3 1.626-4.12 1.626-.078 0-.156-.003-.234-.006-.05.004-.101.006-.153.006-1.82 0-2.988-.826-4.117-1.624-.78-.551-1.516-1.071-2.383-1.216a7.694 7.694 0 00-1.25-.105c-.734 0-1.312.113-1.734.195-.257.05-.478.094-.647.094-.175 0-.366-.038-.449-.321a10.105 10.105 0 01-.174-.712c-.129-.59-.22-.954-.468-.992-2.886-.446-3.712-1.054-3.896-1.485a.556.556 0 01-.044-.185.325.325 0 01.272-.338c4.436-.73 6.425-5.265 6.508-5.458a.548.548 0 01.007-.015c.271-.55.325-1.028.159-1.42-.305-.717-1.298-1.032-1.955-1.24a7.042 7.042 0 01-.434-.147c-1.311-.519-1.42-1.051-1.369-1.322.088-.463.706-.785 1.205-.785.137 0 .258.025.36.072.59.276 1.121.416 1.58.416.634 0 .91-.266.945-.3-.017-.301-.037-.615-.057-.938-.132-2.098-.296-4.704.368-6.191 1.988-4.46 6.206-4.806 7.45-4.806l.547-.005h.074c1.247 0 5.474.346 7.464 4.808.664 1.488.5 4.097.367 6.192l-.005.092c-.019.291-.036.575-.051.847.031.032.286.277.86.299h.001c.437-.017.939-.156 1.49-.414.161-.075.34-.091.463-.091.186 0 .375.036.532.101l.01.004c.445.158.737.47.743.797.006.307-.229.77-1.38 1.224-.119.047-.271.095-.433.146-.658.209-1.65.524-1.954 1.241-.167.392-.113.869.158 1.42l.007.016c.083.192 2.07 4.725 6.509 5.456.164.027.28.173.272.34a.553.553 0 01-.046.185z"
          />
        </svg>
      );
    case "Reddit":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 1000 1000"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M500 1000C223.9 1000 0 776.1 0 500S223.9 0 500 0s500 223.9 500 500-223.9 500-500 500z"
          />
          <path
            fill="#fff"
            fillOpacity={0}
            d="M614.6 604.2c-28.7 0-52.1-23.4-52.1-52.1 0-28.7 23.4-52.1 52.1-52.1s52.1 23.4 52.1 52.1c0 28.7-23.4 52.1-52.1 52.1m9.2 85.5C588.2 725.2 520.1 728 500.1 728s-88.2-2.8-123.7-38.3c-5.3-5.3-5.3-13.8 0-19.1 5.3-5.3 13.8-5.3 19.1 0C417.9 693 465.8 701 500.1 701c34.2 0 82.2-8 104.6-30.4 5.3-5.3 13.8-5.3 19.1 0 5.2 5.3 5.2 13.8 0 19.1M333.3 552.1c0-28.7 23.4-52.1 52.1-52.1 28.7 0 52.1 23.4 52.1 52.1 0 28.7-23.4 52.1-52.1 52.1-28.7 0-52.1-23.4-52.1-52.1m500-52.1c0-40.3-32.6-72.9-72.9-72.9-19.7 0-37.5 7.8-50.6 20.5-49.8-36-118.5-59.2-195-61.9L548 229.4l108.5 23.1c1.3 27.6 23.9 49.6 51.8 49.6 28.8 0 52.1-23.3 52.1-52.1s-23.3-52.1-52.1-52.1c-20.5 0-38 11.9-46.5 29.1l-121.2-25.8c-3.4-.7-6.9-.1-9.8 1.8-2.9 1.9-4.9 4.8-5.6 8.2l-36.4 171.5c-.2 1 0 1.9 0 2.9-77.9 2-147.9 25.3-198.5 61.8-13.1-12.6-30.8-20.3-50.4-20.3-40.3 0-72.9 32.7-72.9 72.9 0 29.6 17.7 55.1 43.1 66.5-1.1 7.2-1.7 14.6-1.7 22.1 0 112.2 130.6 203.1 291.7 203.1s291.7-90.9 291.7-203.1c0-7.4-.6-14.7-1.7-21.9 25.3-11.4 43.2-36.9 43.2-66.7"
          />
        </svg>
      );
    case "GitHub":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M255.969 21.733c-131.739 0-238.572 107.541-238.572 240.206 0 106.107 68.362 196.121 163.205 227.91 11.929 2.22 16.285-5.196 16.285-11.567 0-5.713-.205-20.817-.33-40.856-66.36 14.507-80.375-32.208-80.375-32.208-10.828-27.756-26.489-35.139-26.489-35.139-21.684-14.893 1.613-14.591 1.613-14.591 23.948 1.701 36.534 24.759 36.534 24.759 21.295 36.694 55.866 26.105 69.465 19.947 2.146-15.521 8.318-26.105 15.154-32.116-52.974-6.073-108.69-26.681-108.69-118.699 0-26.229 9.31-47.668 24.576-64.478-2.475-6.071-10.646-30.507 2.329-63.554 0 0 20.045-6.455 65.613 24.614 19.031-5.325 39.432-7.982 59.742-8.072 20.25.123 40.676 2.747 59.738 8.105 45.547-31.074 65.559-24.614 65.559-24.614 13.002 33.077 4.832 57.482 2.387 63.549 15.297 16.81 24.516 38.25 24.516 64.482 0 92.258-55.773 112.563-108.92 118.512 8.559 7.422 16.191 22.069 16.191 44.471 0 32.124-.297 58.019-.297 65.888 0 6.427 4.293 13.903 16.402 11.54 94.697-31.824 162.998-121.805 162.998-227.883.001-132.666-106.832-240.206-238.634-240.206zm0 0"
          />
        </svg>
      );
    case "Telegram":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={lightTheme.socialLinkIcon}
            d="M22.122 10.04h.022c.209 0 .403.065.562.177l-.003-.002a.632.632 0 01.213.403v.003a2.553 2.553 0 01.024.598v-.009c-.225 2.369-1.201 8.114-1.697 10.766-.21 1.123-.623 1.499-1.023 1.535-.869.081-1.529-.574-2.371-1.126-1.318-.865-2.063-1.403-3.342-2.246-1.479-.973-.52-1.51.322-2.384.221-.23 4.052-3.715 4.127-4.031a.308.308 0 00-.07-.265.34.34 0 00-.185-.053.364.364 0 00-.128.024l.002-.001q-.198.045-6.316 4.174a2.805 2.805 0 01-1.619.599h-.006a10.542 10.542 0 01-2.401-.573l.074.024c-.938-.306-1.683-.467-1.619-.985q.051-.404 1.114-.827 6.548-2.853 8.733-3.761a22.627 22.627 0 015.429-2.01l.157-.031zM15.93 1.025C7.628 1.045.905 7.78.905 16.085c0 8.317 6.742 15.06 15.06 15.06s15.06-6.742 15.06-15.06c0-8.305-6.723-15.04-15.023-15.06H15.93z"
          />
        </svg>
      );
    default:
      return (
        <svg
          width={size}
          height={size}
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C114.615 512 0 397.385 0 256S114.615 0 256 0s256 114.615 256 256-114.615 256-256 256zm-24.314-255.99c0-1.969-.168-3.915-.482-5.806l74.576-44.084c7.724 3.704 16.77 5.853 26.413 5.853 28.641 0 51.856-18.804 51.856-41.995 0-23.199-23.215-41.994-51.856-41.994-28.651 0-51.883 18.795-51.883 41.994 0 3.72.614 7.322 1.735 10.748L211.22 222.58c-8.719-5.372-19.594-8.567-31.412-8.567-28.645 0-51.86 18.806-51.86 41.997 0 23.187 23.215 41.982 51.86 41.982 11.818 0 22.693-3.196 31.412-8.567l70.825 41.853a34.47 34.47 0 00-1.735 10.748c0 23.199 23.232 41.995 51.883 41.995 28.641 0 51.856-18.796 51.856-41.995 0-23.191-23.215-41.995-51.856-41.995-9.643 0-18.689 2.149-26.413 5.853L231.204 261.8c.314-1.891.482-3.837.482-5.79z"
            fillRule="evenodd"
            fill={lightTheme.socialLinkIcon}
          />
        </svg>
      );
  }
});

export default SocialLinksLogos;

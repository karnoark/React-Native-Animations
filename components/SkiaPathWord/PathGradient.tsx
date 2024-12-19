/* eslint-disable max-len */
import { Canvas, Fill } from "@shopify/react-native-skia";
import React from "react";

//import { prepare, GradientAlongPath } from "./PathAlongGradient";

// const hello = prepare(
//   "M13.63 248.31C13.63 248.31 51.84 206.67 84.21 169.31C140.84 103.97 202.79 27.66 150.14 14.88C131.01 10.23 116.36 29.88 107.26 45.33C69.7 108.92 58.03 214.33 57.54 302.57C67.75 271.83 104.43 190.85 140.18 193.08C181.47 195.65 145.26 257.57 154.53 284.39C168.85 322.18 208.22 292.83 229.98 277.45C265.92 252.03 288.98 231.22 288.98 200.45C288.98 161.55 235.29 174.02 223.3 205.14C213.93 229.44 214.3 265.89 229.3 284.14C247.49 306.28 287.67 309.93 312.18 288.46C337 266.71 354.66 234.56 368.68 213.03C403.92 158.87 464.36 86.15 449.06 30.03C446.98 22.4 440.36 16.57 432.46 16.26C393.62 14.75 381.84 99.18 375.35 129.31C368.78 159.83 345.17 261.31 373.11 293.06C404.43 328.58 446.29 262.4 464.66 231.67C468.66 225.31 472.59 218.43 476.08 213.07C511.33 158.91 571.77 86.19 556.46 30.07C554.39 22.44 547.77 16.61 539.87 16.3C501.03 14.79 489.25 99.22 482.76 129.35C476.18 159.87 452.58 261.35 480.52 293.1C511.83 328.62 562.4 265.53 572.64 232.86C587.34 185.92 620.94 171.58 660.91 180.29C616 166.66 580.86 199.67 572.64 233.16C566.81 256.93 573.52 282.16 599.25 295.77C668.54 332.41 742.8 211.69 660.91 180.29C643.67 181.89 636.15 204.77 643.29 227.78C654.29 263.97 704.29 268.27 733.08 256"
// );

// const skia = prepare(
//   "M74 29.5C72.3073 26.8958 59 15.5 48.5 15.5C38 15.5 31.6823 19.1927 30.25 21.7969C23.6094 30 21.3307 38.0729 23.4141 46.0156C26.1484 55.651 33.7005 64.4401 46.0703 72.3828C60.263 80.4557 69.3776 89.6354 73.4141 99.9219C74.8464 104.479 75.0417 108.971 74 113.398C72.9583 117.826 70.875 121.862 67.75 125.508C65.1458 129.023 61.6953 131.562 57.3984 133.125C53.1016 134.557 47.8932 135.664 41.7734 136.445C27.0599 137.617 15.0807 135.404 5.83594 129.805M85.9141 104.805C102.19 80.8463 114.299 60.8594 122.242 44.8437C124.195 40.2864 125.628 36.8359 126.539 34.4922C127.451 32.0182 128.362 28.763 129.273 24.7265C130.185 20.6901 130.51 16.9792 130.25 13.5937C129.859 10.2083 128.167 7.73436 125.172 6.17186C122.177 4.47915 119.312 4.67447 116.578 6.7578C110.979 9.75259 107.203 14.8958 105.25 22.1875C104.078 25.3125 102.906 28.9583 101.734 33.125C100.693 37.2917 99.9115 40.4818 99.3906 42.6953C99 44.9088 98.2839 48.9453 97.2422 54.8047C96.2005 60.5338 95.5495 63.9193 95.2891 64.9609C92.6849 81.237 89.5599 104.87 85.9141 135.859C89.9505 121.797 94.5729 110.599 99.7812 102.266C101.604 98.6198 103.167 95.7552 104.469 93.6719C105.771 91.5885 107.659 89.3099 110.133 86.8359C112.737 84.362 115.471 82.539 118.336 81.3672C128.102 77.7213 135.133 78.0469 139.43 82.3437C142.034 85.0781 143.336 88.3984 143.336 92.3047C143.466 96.2109 141.969 99.2708 138.844 101.484C132.724 104.87 123.414 105.977 110.914 104.805C112.997 105.456 114.56 106.042 115.602 106.562C116.773 106.953 118.206 107.604 119.898 108.516C121.721 109.427 123.089 110.534 124 111.836C125.042 113.138 125.693 114.635 125.953 116.328C126.083 116.979 126.279 118.216 126.539 120.039C126.93 121.862 127.255 123.229 127.516 124.141C127.776 125.052 128.102 126.224 128.492 127.656C129.013 129.089 129.599 130.326 130.25 131.367C131.031 132.279 131.943 133.19 132.984 134.102C136.24 137.227 141.643 136.836 149.195 132.93C151.409 131.888 153.427 130.586 155.25 129.023C157.203 127.461 159.026 125.573 160.719 123.359C162.542 121.016 163.974 119.128 165.016 117.695C166.057 116.133 167.49 113.854 169.312 110.859C171.135 107.865 172.438 105.846 173.219 104.805C177.385 96.4713 181.552 88.138 185.719 79.8047C179.339 95.8203 175.237 108.06 173.414 116.523C172.633 118.997 172.307 121.862 172.438 125.117C172.568 128.372 173.544 130.977 175.367 132.93C176.669 134.492 178.297 135.534 180.25 136.055C182.333 136.576 184.286 136.51 186.109 135.859C194.052 133.516 200.497 128.958 205.445 122.187C208.31 118.281 212.151 112.487 216.969 104.805M194.703 55.9765C192.88 55.9765 191.773 55.1302 191.383 53.4375C191.122 51.6146 191.318 50.0521 191.969 48.75C193.01 48.2292 194.312 47.9687 195.875 47.9687C197.568 47.9687 198.609 48.6849 199 50.1172M274.977 99.7265C271.721 90.612 267.75 84.9479 263.062 82.7344C258.635 80.1302 253.688 78.8932 248.219 79.0234C242.75 79.0234 237.867 80.4557 233.57 83.3203C229.534 85.664 226.083 88.789 223.219 92.6953C220.354 96.4713 218.401 100.638 217.359 105.195C216.448 109.622 216.578 114.115 217.75 118.672C219.052 123.099 221.266 126.875 224.391 130C229.339 134.167 235.328 136.25 242.359 136.25C249.391 136.25 255.445 134.167 260.523 130C262.607 127.917 264.104 126.419 265.016 125.508C265.927 124.596 266.969 123.294 268.141 121.602C269.443 119.909 270.484 118.151 271.266 116.328M279.664 79.6094C276.148 94.0625 273.805 106.628 272.633 117.305C271.461 125.508 273.023 131.172 277.32 134.297C280.576 136.901 285.654 136.51 292.555 133.125C298.544 130.26 304.273 124.661 309.742 116.328"
// );

export const PathGradient = () => {
  // const progress = useLoop({
  //   duration: 3000,
  //   easing: Easing.inOut(Easing.ease),
  // });
  return (
    <Canvas style={{ flex: 1 }}>
      <Fill color="black" />
      {/* <GradientAlongPath {...hello} progress={progress} /> */}
    </Canvas>
  );
};

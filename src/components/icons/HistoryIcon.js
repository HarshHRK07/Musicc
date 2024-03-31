import * as React from "react";
const HistoryIcon = ({size, color, props}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g strokeWidth={0} />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 8v4l2.5 2.5"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5.604 5.604-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 0 0-1.5.008zM3.75 12a.75.75 0 0 0-1.5 0zm13.125 8.445a.75.75 0 1 0-.75-1.298zm2.272-4.32a.75.75 0 1 0 1.298.75zM5.14 5.07a.75.75 0 1 0 1.056 1.066zm13.722.067c-3.82-3.82-9.993-3.859-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.065zM5.074 5.074 3.808 6.34l1.06 1.06 1.267-1.265zm-.74 2.547 2.546.012.007-1.5-2.545-.012zm.754-.754L5.075 4.32l-1.5.008.013 2.545zM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5A9.75 9.75 0 0 0 12 2.25zm0 16.5A8.25 8.25 0 0 1 3.75 12h-1.5A9.75 9.75 0 0 0 12 21.75zm4.125-1.103A8.2 8.2 0 0 1 12 20.25v1.5c1.775 0 3.44-.475 4.875-1.305zM20.25 12a8.2 8.2 0 0 1-1.103 4.125l1.298.75A9.7 9.7 0 0 0 21.75 12zM6.196 6.137A8.22 8.22 0 0 1 12 3.75v-1.5a9.72 9.72 0 0 0-6.86 2.821z"
      fill={color}
    />
  </svg>
);
export default HistoryIcon;

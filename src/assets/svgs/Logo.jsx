import * as React from "react";

const NavbarLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={152}
    height={29}
    className="fill-[#0D0720] dark:fill-white"
    fill="none"
    {...props}
  >
    <path d="M10.497 5.66v3.9H0v-3.9h10.497ZM2.2 1.673h5.298v15.394c0 .325.05.589.151.791a.946.946 0 0 0 .466.423c.202.08.444.119.726.119.202 0 .415-.018.639-.054a9.67 9.67 0 0 0 .52-.109l.802 3.825c-.253.072-.61.162-1.073.27a8.9 8.9 0 0 1-1.636.206c-1.242.058-2.307-.087-3.195-.433-.882-.354-1.557-.903-2.026-1.647-.462-.744-.686-1.679-.672-2.806V1.673ZM18.855 12.81v9.49h-5.297V.114h5.124v8.601h.184c.375-1.025.99-1.827 1.842-2.405.859-.578 1.91-.867 3.152-.867 1.17 0 2.188.26 3.055.78.867.513 1.538 1.239 2.015 2.178.484.939.722 2.037.715 3.293V22.3h-5.297v-9.566c.007-.924-.224-1.646-.694-2.166s-1.13-.78-1.982-.78c-.556 0-1.047.122-1.474.368a2.51 2.51 0 0 0-.985 1.029c-.232.448-.35.99-.358 1.625ZM40.72 22.614c-1.749 0-3.25-.358-4.507-1.073a7.4 7.4 0 0 1-2.893-3.011c-.672-1.293-1.007-2.791-1.007-4.496 0-1.712.335-3.21 1.007-4.496a7.312 7.312 0 0 1 2.893-3.011c1.256-.722 2.758-1.084 4.506-1.084 1.748 0 3.246.362 4.496 1.084a7.224 7.224 0 0 1 2.892 3.011c.68 1.286 1.019 2.784 1.019 4.496 0 1.705-.34 3.203-1.019 4.496a7.309 7.309 0 0 1-2.892 3.011c-1.25.715-2.748 1.073-4.496 1.073Zm.032-3.997c.635 0 1.173-.195 1.614-.585.44-.39.776-.932 1.007-1.625.239-.694.358-1.495.358-2.405 0-.925-.12-1.734-.358-2.427-.23-.693-.567-1.235-1.007-1.625-.44-.39-.979-.585-1.614-.585-.658 0-1.214.195-1.669.585-.447.39-.79.932-1.029 1.625-.23.693-.346 1.502-.346 2.427 0 .91.115 1.711.346 2.405.238.693.582 1.235 1.03 1.625.454.39 1.01.585 1.668.585ZM57.137 12.81v9.49h-5.298V5.66h5.038v3.055h.184a4.671 4.671 0 0 1 1.885-2.394c.888-.585 1.946-.878 3.174-.878 1.17 0 2.185.264 3.044.791.867.52 1.538 1.25 2.015 2.189.484.931.722 2.022.715 3.271V22.3h-5.297v-9.566c.007-.924-.228-1.646-.704-2.166-.47-.52-1.123-.78-1.961-.78-.556 0-1.047.122-1.474.368a2.441 2.441 0 0 0-.974 1.029c-.224.448-.34.99-.347 1.625ZM78.93 28.886c-1.581 0-2.935-.22-4.062-.66-1.127-.441-2.011-1.044-2.654-1.81a5.008 5.008 0 0 1-1.16-2.6l5.016-.281c.094.34.268.635.52.888.26.253.596.448 1.008.585.419.137.91.206 1.473.206.889 0 1.622-.217 2.2-.65.584-.426.877-1.174.877-2.242v-2.925h-.184a3.94 3.94 0 0 1-.954 1.375c-.426.405-.957.723-1.592.954-.628.23-1.35.346-2.167.346-1.213 0-2.325-.281-3.336-.845-1.004-.57-1.81-1.451-2.416-2.643-.6-1.199-.9-2.74-.9-4.626 0-1.942.311-3.542.932-4.799.621-1.264 1.434-2.199 2.438-2.806a6.229 6.229 0 0 1 3.26-.91c.874 0 1.622.152 2.243.455a4.594 4.594 0 0 1 1.55 1.149c.404.47.71.957.92 1.462h.152V5.66h5.276v16.705c0 1.408-.354 2.596-1.062 3.564-.708.968-1.697 1.7-2.969 2.2-1.27.505-2.74.757-4.409.757Zm.163-10.67c.643 0 1.192-.17 1.647-.51.455-.339.805-.826 1.05-1.462.246-.635.369-1.397.369-2.286 0-.902-.123-1.679-.369-2.329-.238-.657-.588-1.163-1.05-1.516-.455-.354-1.004-.531-1.647-.531-.657 0-1.213.18-1.668.541-.455.362-.802.87-1.04 1.528-.232.65-.347 1.419-.347 2.307 0 .889.12 1.65.358 2.286.238.636.58 1.123 1.029 1.463.455.339 1.01.509 1.668.509ZM96.044.114V22.3h-5.297V.114h5.297ZM104.107 22.581c-1.062 0-2.004-.176-2.828-.53a4.405 4.405 0 0 1-1.939-1.625c-.47-.73-.704-1.643-.704-2.741 0-.924.162-1.704.487-2.34a4.164 4.164 0 0 1 1.344-1.55 6.32 6.32 0 0 1 1.971-.898c.744-.21 1.539-.35 2.384-.423a34.398 34.398 0 0 0 2.285-.27c.578-.102.997-.243 1.257-.423a.912.912 0 0 0 .401-.791v-.054c0-.556-.191-.986-.574-1.29-.383-.303-.899-.454-1.549-.454-.701 0-1.264.151-1.69.455a2.007 2.007 0 0 0-.813 1.256l-4.886-.173a5.78 5.78 0 0 1 1.116-2.708c.607-.802 1.437-1.43 2.492-1.885 1.062-.462 2.336-.694 3.824-.694 1.062 0 2.04.127 2.936.38.895.245 1.675.606 2.34 1.083a4.9 4.9 0 0 1 1.538 1.733c.368.686.553 1.47.553 2.351V22.3h-4.984V19.98h-.13a4.721 4.721 0 0 1-1.137 1.43c-.455.39-.993.683-1.614.878-.614.195-1.308.292-2.08.292Zm1.636-3.466c.57 0 1.083-.116 1.538-.347.462-.23.83-.549 1.105-.953.274-.412.411-.888.411-1.43v-1.582c-.151.08-.335.152-.552.217a9.509 9.509 0 0 1-.693.184c-.253.058-.513.108-.78.152-.268.043-.524.083-.769.119-.499.08-.925.202-1.279.368a2.015 2.015 0 0 0-.801.65c-.181.26-.271.57-.271.932 0 .549.195.968.585 1.257.397.289.899.433 1.506.433ZM122.588 12.81v9.49h-5.297V5.66h5.037v3.055h.184a4.677 4.677 0 0 1 1.885-2.394c.889-.585 1.947-.878 3.174-.878 1.17 0 2.185.264 3.044.791.867.52 1.539 1.25 2.015 2.189.484.931.723 2.022.715 3.271V22.3h-5.297v-9.566c.007-.924-.228-1.646-.704-2.166-.47-.52-1.123-.78-1.961-.78-.556 0-1.047.122-1.473.368a2.44 2.44 0 0 0-.975 1.029c-.224.448-.34.99-.347 1.625ZM141.316 22.581c-1.062 0-2.004-.176-2.828-.53a4.407 4.407 0 0 1-1.939-1.625c-.469-.73-.704-1.643-.704-2.741 0-.924.163-1.704.488-2.34a4.16 4.16 0 0 1 1.343-1.55 6.325 6.325 0 0 1 1.972-.898c.743-.21 1.538-.35 2.383-.423a34.524 34.524 0 0 0 2.286-.27c.577-.102.996-.243 1.256-.423a.91.91 0 0 0 .401-.791v-.054c0-.556-.191-.986-.574-1.29-.383-.303-.899-.454-1.549-.454-.701 0-1.264.151-1.69.455a2.007 2.007 0 0 0-.813 1.256l-4.885-.173a5.776 5.776 0 0 1 1.115-2.708c.607-.802 1.438-1.43 2.492-1.885 1.062-.462 2.336-.694 3.824-.694 1.062 0 2.04.127 2.936.38.896.245 1.676.606 2.34 1.083a4.9 4.9 0 0 1 1.538 1.733c.369.686.553 1.47.553 2.351V22.3h-4.984V19.98h-.13a4.721 4.721 0 0 1-1.137 1.43c-.455.39-.993.683-1.614.878-.614.195-1.307.292-2.08.292Zm1.636-3.466c.57 0 1.083-.116 1.538-.347a2.841 2.841 0 0 0 1.105-.953c.274-.412.412-.888.412-1.43v-1.582a3.16 3.16 0 0 1-.553.217c-.209.065-.44.126-.693.184-.253.058-.513.108-.78.152-.267.043-.524.083-.769.119-.499.08-.925.202-1.279.368a2.022 2.022 0 0 0-.801.65c-.181.26-.271.57-.271.932 0 .549.195.968.585 1.257.397.289.899.433 1.506.433Z" />
  </svg>
);
export default NavbarLogo;
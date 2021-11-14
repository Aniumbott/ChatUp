import React from "react";
import styled from "styled-components";

function Home() {
  function Quote() {
    const quotes = ["Chat", "Discussion", "Debate", "Talk", "Time"];
    for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        document.querySelector(".txt").innerText = quotes[i % quotes.length];
        if (i > 10) {
          i = 0;
        }
      }, 2000 * i);
      console.log("yo");
    }
  }

  return (
    <HomeStyleComponent>
      <main>
        <div class="quote">
          <span>Have a</span>
          <span>Great</span>
          <p></p>
        </div>
        <div className="info-graphic">
          <svg
            width="892"
            height="746"
            viewBox="0 0 892 746"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1_8)">
              <path
                d="M418.644 745.194C613.048 745.194 770.644 737.135 770.644 727.194C770.644 717.253 613.048 709.194 418.644 709.194C224.239 709.194 66.6436 717.253 66.6436 727.194C66.6436 737.135 224.239 745.194 418.644 745.194Z"
                fill="#717171"
              />
              <path
                d="M624.297 172.947H620.298V63.4019C620.298 46.5867 613.618 30.4602 601.728 18.57C589.838 6.67985 573.712 1.85653e-05 556.896 1.13715e-10H324.81C307.995 -3.18259e-05 291.868 6.67975 279.978 18.5699C268.088 30.46 261.408 46.5865 261.408 63.4017V664.376C261.408 681.191 268.088 697.318 279.978 709.208C291.868 721.098 307.994 727.778 324.81 727.778H556.896C573.711 727.778 589.838 721.098 601.728 709.208C613.618 697.318 620.298 681.192 620.298 664.376V250.923H624.297L624.297 172.947Z"
                fill="#151D35"
              />
              <path
                d="M606.803 63.8443V663.934C606.803 676.492 601.814 688.536 592.935 697.416C584.055 706.295 572.011 711.284 559.453 711.284H326.253C313.695 711.284 301.652 706.295 292.772 697.416C283.892 688.536 278.904 676.492 278.903 663.934V63.8443C278.904 51.2863 283.892 39.2428 292.772 30.363C301.652 21.4832 313.695 16.4945 326.253 16.4943H354.543C353.153 19.9102 352.624 23.6155 353.002 27.284C353.38 30.9526 354.653 34.4721 356.711 37.5329C358.768 40.5938 361.546 43.1021 364.8 44.8374C368.055 46.5726 371.685 47.4816 375.373 47.4843H508.333C512.021 47.4815 515.652 46.5725 518.906 44.8373C522.161 43.102 524.939 40.5937 526.996 37.5329C529.053 34.4721 530.327 30.9526 530.705 27.284C531.083 23.6155 530.553 19.9102 529.163 16.4943H559.453C572.011 16.4945 584.055 21.4832 592.935 30.363C601.814 39.2428 606.803 51.2863 606.803 63.8443Z"
                fill="#EFEFEF"
              />
              <path
                d="M531.678 322.6C530.128 323.41 528.551 324.177 526.947 324.9C525.487 325.56 524.004 326.18 522.498 326.76C521.947 326.97 521.388 327.18 520.828 327.39C516.4 328.996 511.853 330.25 507.228 331.14C504.938 331.59 502.618 331.944 500.268 332.2C498.328 332.42 496.368 332.577 494.388 332.67C492.978 332.74 491.567 332.77 490.147 332.77C484.524 332.773 478.913 332.247 473.388 331.2C471.947 330.94 470.538 330.63 469.127 330.29C462.307 328.656 455.704 326.219 449.458 323.03C448.897 322.75 448.337 322.45 447.777 322.16C446.947 321.72 446.138 321.26 445.328 320.78C445.717 320.24 446.138 319.71 446.567 319.19C451.247 313.391 457.095 308.644 463.732 305.257C470.369 301.869 477.646 299.919 485.087 299.532C492.528 299.145 499.968 300.331 506.92 303.011C513.873 305.692 520.182 309.808 525.438 315.09C527.262 316.921 528.953 318.879 530.498 320.95C530.907 321.49 531.297 322.04 531.678 322.6Z"
                fill="#FE9C26"
              />
              <path
                d="M492.143 278.673C516.394 278.673 536.053 259.014 536.053 234.764C536.053 210.513 516.394 190.854 492.143 190.854C467.892 190.854 448.233 210.513 448.233 234.764C448.233 259.014 467.892 278.673 492.143 278.673Z"
                fill="black"
              />
              <path
                d="M503.822 278.735C519.66 270.078 525.48 250.221 516.823 234.384C508.165 218.546 488.308 212.726 472.471 221.383C456.634 230.041 450.813 249.898 459.471 265.735C468.128 281.572 487.985 287.393 503.822 278.735Z"
                fill="#A0616A"
              />
              <path
                d="M522.486 229.503C515.018 234.65 506.154 237.39 497.084 237.353C500.32 239.597 504.003 241.112 507.88 241.795C495.821 244.382 483.358 244.452 471.27 242.001C468.583 241.57 465.991 240.679 463.606 239.368C462.418 238.705 461.383 237.798 460.568 236.708C459.753 235.618 459.176 234.369 458.876 233.042C458.073 228.453 461.648 224.284 465.364 221.475C471.053 217.239 477.612 214.32 484.568 212.93C491.523 211.541 498.7 211.714 505.58 213.438C510.073 214.6 514.573 216.562 517.491 220.169C520.409 223.777 521.274 229.339 518.493 233.054L522.486 229.503Z"
                fill="black"
              />
              <path
                d="M490.147 152.77C470.52 152.767 451.429 159.182 435.785 171.037C420.142 182.891 408.803 199.535 403.497 218.433C398.192 237.33 399.21 257.444 406.397 275.708C413.585 293.973 426.547 309.387 443.308 319.6L443.888 319.94C444.368 320.23 444.848 320.51 445.328 320.78C446.138 321.26 446.947 321.72 447.777 322.16C448.337 322.45 448.897 322.75 449.458 323.03C455.704 326.219 462.307 328.656 469.127 330.29C470.538 330.63 471.947 330.94 473.388 331.2C478.913 332.247 484.524 332.773 490.147 332.77C491.567 332.77 492.978 332.74 494.388 332.67C496.368 332.58 498.328 332.424 500.268 332.2C502.618 331.94 504.938 331.587 507.228 331.14C511.853 330.25 516.4 328.996 520.828 327.39C521.388 327.18 521.947 326.97 522.498 326.76C524.007 326.18 525.491 325.56 526.947 324.9C528.547 324.18 530.124 323.414 531.678 322.6C547.245 314.448 560.112 301.952 568.717 286.63C568.757 286.55 568.808 286.47 568.848 286.39C573.439 278.152 576.696 269.238 578.498 259.98C581.027 246.948 580.644 233.517 577.375 220.65C574.107 207.783 568.034 195.798 559.591 185.552C551.148 175.307 540.544 167.055 528.539 161.388C516.533 155.721 503.423 152.778 490.148 152.77H490.147ZM567.208 285.22C567.127 285.36 567.058 285.5 566.978 285.63C558.544 300.726 545.858 313.009 530.497 320.95C528.967 321.75 527.411 322.5 525.828 323.2C524.518 323.79 523.178 324.35 521.828 324.87C521.257 325.09 520.678 325.31 520.098 325.51C516.272 326.908 512.352 328.03 508.368 328.87C505.412 329.5 502.424 329.97 499.417 330.28C497.567 330.48 495.687 330.62 493.797 330.69C492.587 330.74 491.368 330.77 490.147 330.77C484.705 330.777 479.275 330.271 473.928 329.26C470.675 328.66 467.459 327.872 464.297 326.9C459.481 325.412 454.801 323.516 450.308 321.23C449.788 320.96 449.268 320.69 448.757 320.41C448.027 320.02 447.288 319.62 446.567 319.19C446.027 318.89 445.487 318.57 444.957 318.25C444.647 318.07 444.337 317.88 444.027 317.69C429.332 308.666 417.609 295.525 410.314 279.899C403.019 264.273 400.472 246.848 402.99 229.788C405.507 212.727 412.978 196.781 424.475 183.928C435.973 171.075 450.991 161.88 467.667 157.484C484.343 153.088 501.942 153.685 518.281 159.201C534.621 164.716 548.981 174.908 559.582 188.51C570.182 202.113 576.555 218.529 577.911 235.721C579.266 252.913 575.545 270.124 567.207 285.22H567.208Z"
                fill="#151D35"
              />
              <path
                d="M469.907 191.46C469.435 186.492 463.349 183.433 458.589 184.934C453.83 186.435 450.705 191.227 449.761 196.127C449.306 198.191 449.263 200.324 449.635 202.404C450.007 204.484 450.785 206.471 451.926 208.249C454.332 211.712 458.752 213.872 462.876 212.993C467.583 211.99 470.844 207.394 471.777 202.672C472.71 197.951 471.784 193.083 470.859 188.36L469.907 191.46Z"
                fill="black"
              />
              <path
                d="M536.89 198.557C536.417 193.589 530.331 190.53 525.572 192.031C520.812 193.532 517.688 198.324 516.743 203.224C516.288 205.288 516.246 207.421 516.617 209.501C516.989 211.581 517.767 213.568 518.908 215.346C521.314 218.809 525.735 220.969 529.858 220.09C534.565 219.087 537.826 214.491 538.76 209.769C539.693 205.048 538.766 200.18 537.841 195.457L536.89 198.557Z"
                fill="black"
              />
              <path
                d="M334.584 278.739C333.961 278.738 333.345 278.608 332.776 278.356C332.207 278.103 331.696 277.735 331.277 277.275L281.655 223.141C281.092 222.528 280.408 222.039 279.646 221.704C278.884 221.368 278.061 221.195 277.229 221.194H15.0093C11.0299 221.189 7.21487 219.607 4.40105 216.793C1.58723 213.979 0.00446778 210.164 0 206.185V111.622C0.00446514 107.643 1.58723 103.828 4.40105 101.014C7.21487 98.2001 11.0299 96.6174 15.0093 96.6129H354.734C358.714 96.6174 362.529 98.2001 365.343 101.014C368.157 103.828 369.739 107.643 369.744 111.622V206.185C369.739 210.164 368.157 213.979 365.343 216.793C362.529 219.607 358.714 221.19 354.734 221.194H345.103C343.511 221.196 341.985 221.829 340.859 222.955C339.733 224.081 339.1 225.607 339.099 227.199V274.232C339.102 275.14 338.83 276.028 338.317 276.777C337.805 277.527 337.076 278.102 336.228 278.428C335.704 278.633 335.147 278.738 334.584 278.739Z"
                fill="#EFEFEF"
              />
              <path
                d="M334.584 278.739C333.961 278.738 333.345 278.608 332.776 278.356C332.207 278.103 331.696 277.735 331.277 277.275L281.655 223.141C281.092 222.528 280.408 222.039 279.646 221.704C278.884 221.368 278.061 221.195 277.229 221.194H15.0093C11.0299 221.189 7.21487 219.607 4.40105 216.793C1.58723 213.979 0.00446778 210.164 0 206.185V111.622C0.00446514 107.643 1.58723 103.828 4.40105 101.014C7.21487 98.2001 11.0299 96.6174 15.0093 96.6129H354.734C358.714 96.6174 362.529 98.2001 365.343 101.014C368.157 103.828 369.739 107.643 369.744 111.622V206.185C369.739 210.164 368.157 213.979 365.343 216.793C362.529 219.607 358.714 221.19 354.734 221.194H345.103C343.511 221.196 341.985 221.829 340.859 222.955C339.733 224.081 339.1 225.607 339.099 227.199V274.232C339.102 275.14 338.83 276.028 338.317 276.777C337.805 277.527 337.076 278.102 336.228 278.428C335.704 278.633 335.147 278.738 334.584 278.739ZM15.0093 98.6129C11.5602 98.6168 8.25349 99.9887 5.81462 102.428C3.37575 104.866 2.00389 108.173 2 111.622V206.185C2.0039 209.634 3.37577 212.94 5.81464 215.379C8.25351 217.818 11.5602 219.19 15.0093 219.194H277.229C278.338 219.195 279.436 219.427 280.451 219.873C281.467 220.32 282.379 220.973 283.129 221.79L332.751 275.923C333.092 276.295 333.537 276.555 334.028 276.669C334.519 276.783 335.033 276.747 335.503 276.564C335.973 276.381 336.377 276.061 336.661 275.645C336.946 275.229 337.098 274.736 337.099 274.232V227.199C337.101 225.077 337.945 223.042 339.446 221.541C340.946 220.041 342.981 219.196 345.103 219.194H354.734C358.184 219.19 361.49 217.818 363.929 215.379C366.368 212.94 367.74 209.634 367.744 206.185V111.622C367.74 108.173 366.368 104.866 363.929 102.428C361.49 99.9887 358.184 98.6168 354.734 98.6129H15.0093Z"
                fill="#151D35"
              />
              <path
                d="M36.8158 138.327C44.0694 138.327 49.9495 132.447 49.9495 125.193C49.9495 117.94 44.0694 112.06 36.8158 112.06C29.5623 112.06 23.6821 117.94 23.6821 125.193C23.6821 132.447 29.5623 138.327 36.8158 138.327Z"
                fill="#FE9C26"
              />
              <path
                d="M339.412 197.867H30.3319C29.4113 197.868 28.4996 197.687 27.6487 197.336C26.7979 196.984 26.0248 196.469 25.3734 195.818C24.7221 195.168 24.2054 194.395 23.8528 193.545C23.5003 192.694 23.3188 191.783 23.3188 190.862C23.3188 189.941 23.5003 189.03 23.8528 188.18C24.2054 187.329 24.7221 186.557 25.3734 185.906C26.0248 185.256 26.7979 184.74 27.6487 184.388C28.4996 184.037 29.4113 183.856 30.3319 183.857H339.412C341.268 183.86 343.048 184.599 344.359 185.912C345.671 187.225 346.408 189.006 346.408 190.862C346.408 192.718 345.671 194.499 344.359 195.812C343.048 197.126 341.268 197.864 339.412 197.867Z"
                fill="#E6E6E6"
              />
              <path
                d="M238.72 168.097H30.3319C29.4113 168.098 28.4996 167.918 27.6487 167.566C26.7979 167.215 26.0248 166.699 25.3734 166.048C24.7221 165.398 24.2054 164.625 23.8528 163.775C23.5003 162.924 23.3188 162.013 23.3188 161.092C23.3188 160.172 23.5003 159.26 23.8528 158.41C24.2054 157.559 24.7221 156.787 25.3734 156.136C26.0248 155.486 26.7979 154.97 27.6487 154.618C28.4996 154.267 29.4113 154.087 30.3319 154.088H238.72C240.578 154.088 242.359 154.826 243.673 156.139C244.987 157.453 245.725 159.235 245.725 161.092C245.725 162.95 244.987 164.732 243.673 166.045C242.359 167.359 240.578 168.097 238.72 168.097Z"
                fill="#E6E6E6"
              />
              <path
                d="M555.067 599.428C554.219 599.102 553.49 598.527 552.978 597.777C552.465 597.028 552.193 596.14 552.196 595.232V548.199C552.195 546.607 551.562 545.081 550.436 543.955C549.31 542.829 547.784 542.196 546.192 542.194H536.561C532.581 542.189 528.766 540.607 525.952 537.793C523.138 534.979 521.556 531.164 521.551 527.185V432.622C521.556 428.643 523.138 424.828 525.952 422.014C528.766 419.2 532.581 417.617 536.561 417.613H876.286C880.265 417.617 884.08 419.2 886.894 422.014C889.708 424.828 891.291 428.643 891.295 432.622V527.185C891.291 531.164 889.708 534.979 886.894 537.793C884.08 540.607 880.265 542.189 876.286 542.194H614.066C613.234 542.195 612.411 542.368 611.649 542.704C610.887 543.039 610.203 543.528 609.64 544.141L560.018 598.275C559.599 598.735 559.088 599.103 558.519 599.356C557.95 599.608 557.334 599.738 556.711 599.739C556.148 599.738 555.591 599.633 555.067 599.428Z"
                fill="#EFEFEF"
              />
              <path
                d="M555.067 599.428C554.219 599.102 553.49 598.527 552.978 597.777C552.465 597.028 552.193 596.14 552.196 595.232V548.199C552.195 546.607 551.562 545.081 550.436 543.955C549.31 542.829 547.784 542.196 546.192 542.194H536.561C532.581 542.189 528.766 540.607 525.952 537.793C523.138 534.979 521.556 531.164 521.551 527.185V432.622C521.556 428.643 523.138 424.828 525.952 422.014C528.766 419.2 532.581 417.617 536.561 417.613H876.286C880.265 417.617 884.08 419.2 886.894 422.014C889.708 424.828 891.291 428.643 891.295 432.622V527.185C891.291 531.164 889.708 534.979 886.894 537.793C884.08 540.607 880.265 542.189 876.286 542.194H614.066C613.234 542.195 612.411 542.368 611.649 542.704C610.887 543.039 610.203 543.528 609.64 544.141L560.018 598.275C559.599 598.735 559.088 599.103 558.519 599.356C557.95 599.608 557.334 599.738 556.711 599.739C556.148 599.738 555.591 599.633 555.067 599.428ZM536.561 419.613C533.111 419.617 529.805 420.989 527.366 423.428C524.927 425.866 523.555 429.173 523.551 432.622V527.185C523.555 530.634 524.927 533.94 527.366 536.379C529.805 538.818 533.111 540.19 536.561 540.194H546.192C548.314 540.196 550.349 541.041 551.849 542.541C553.35 544.042 554.194 546.077 554.197 548.199V595.232C554.197 595.736 554.349 596.229 554.634 596.645C554.918 597.061 555.322 597.381 555.792 597.564C556.262 597.747 556.776 597.783 557.267 597.669C557.758 597.555 558.203 597.295 558.544 596.923L608.166 542.79C608.916 541.973 609.828 541.32 610.844 540.873C611.859 540.426 612.957 540.195 614.066 540.194H876.286C879.735 540.19 883.042 538.818 885.48 536.379C887.919 533.94 889.291 530.634 889.295 527.185V432.622C889.291 429.173 887.919 425.866 885.48 423.428C883.042 420.989 879.735 419.617 876.286 419.613H536.561Z"
                fill="#151D35"
              />
              <path
                d="M449.178 628.71C435.246 637.631 419.105 642.496 402.564 642.759C386.023 643.022 369.736 638.674 355.527 630.2C358.027 625.548 361.194 621.286 364.928 617.55C370.689 611.762 377.7 607.371 385.423 604.715C393.146 602.059 401.375 601.209 409.478 602.229C417.581 603.25 425.342 606.114 432.165 610.603C438.988 615.091 444.692 621.084 448.837 628.12C448.947 628.31 449.067 628.51 449.178 628.71Z"
                fill="#FE9C26"
              />
              <path
                d="M398.443 580.89C422.855 580.89 442.644 561.1 442.644 536.688C442.644 512.277 422.855 492.487 398.443 492.487C374.031 492.487 354.241 512.277 354.241 536.688C354.241 561.1 374.031 580.89 398.443 580.89Z"
                fill="black"
              />
              <path
                d="M431.333 567.866C440.048 551.923 434.189 531.934 418.246 523.219C402.304 514.504 382.315 520.363 373.6 536.306C364.885 552.248 370.744 572.237 386.686 580.952C402.629 589.667 422.618 583.808 431.333 567.866Z"
                fill="#FFB8B8"
              />
              <path
                d="M367.898 531.393C375.416 536.574 384.339 539.332 393.469 539.296C390.212 541.554 386.504 543.079 382.601 543.767C394.74 546.371 407.287 546.441 419.454 543.974C422.159 543.54 424.769 542.644 427.169 541.324C428.366 540.656 429.408 539.744 430.228 538.646C431.049 537.549 431.629 536.292 431.931 534.955C432.74 530.336 429.141 526.14 425.4 523.311C419.673 519.047 413.07 516.109 406.069 514.71C399.067 513.311 391.842 513.486 384.916 515.222C380.394 516.391 375.864 518.366 372.926 521.997C369.989 525.629 369.119 531.228 371.917 534.968L367.898 531.393Z"
                fill="black"
              />
              <path
                d="M401.147 643.77C379.5 643.764 358.581 635.952 342.227 621.769C325.873 607.586 315.181 587.982 312.112 566.553C309.043 545.124 313.803 523.307 325.52 505.104C337.236 486.901 355.122 473.532 375.898 467.45C396.673 461.368 418.945 462.981 438.628 471.992C458.311 481.003 474.085 496.809 483.057 516.51C492.028 536.211 493.596 558.486 487.473 579.249C481.349 600.013 467.945 617.872 449.718 629.552C435.224 638.846 418.365 643.781 401.147 643.77ZM401.147 465.77C383.74 465.769 366.724 470.929 352.249 480.599C337.775 490.269 326.494 504.014 319.832 520.096C313.169 536.177 311.426 553.873 314.821 570.946C318.217 588.019 326.599 603.701 338.908 616.01C351.217 628.319 366.899 636.701 383.972 640.096C401.044 643.492 418.741 641.748 434.822 635.086C450.904 628.424 464.649 617.142 474.319 602.668C483.989 588.194 489.149 571.177 489.147 553.77C489.121 530.439 479.841 508.072 463.344 491.574C446.846 475.077 424.478 465.797 401.147 465.77Z"
                fill="#151D35"
              />
              <path
                d="M563.816 458.327C571.069 458.327 576.95 452.447 576.95 445.193C576.95 437.94 571.069 432.06 563.816 432.06C556.562 432.06 550.682 437.94 550.682 445.193C550.682 452.447 556.562 458.327 563.816 458.327Z"
                fill="#FE9C26"
              />
              <path
                d="M866.412 517.867H557.332C556.411 517.868 555.5 517.687 554.649 517.336C553.798 516.984 553.025 516.469 552.373 515.818C551.722 515.167 551.205 514.395 550.853 513.544C550.5 512.694 550.319 511.783 550.319 510.862C550.319 509.941 550.5 509.03 550.853 508.18C551.205 507.329 551.722 506.557 552.373 505.906C553.025 505.255 553.798 504.74 554.649 504.388C555.5 504.037 556.411 503.856 557.332 503.857H866.412C868.27 503.857 870.051 504.595 871.365 505.909C872.678 507.223 873.416 509.004 873.416 510.862C873.416 512.72 872.678 514.501 871.365 515.815C870.051 517.129 868.27 517.867 866.412 517.867Z"
                fill="#E6E6E6"
              />
              <path
                d="M765.72 488.097H557.332C556.411 488.098 555.5 487.918 554.649 487.566C553.798 487.215 553.025 486.699 552.373 486.048C551.722 485.398 551.205 484.625 550.853 483.775C550.5 482.924 550.319 482.013 550.319 481.092C550.319 480.172 550.5 479.26 550.853 478.41C551.205 477.559 551.722 476.787 552.373 476.136C553.025 475.486 553.798 474.97 554.649 474.618C555.5 474.267 556.411 474.086 557.332 474.088H765.72C767.576 474.09 769.356 474.829 770.668 476.142C771.979 477.456 772.716 479.236 772.716 481.092C772.716 482.949 771.979 484.729 770.668 486.042C769.356 487.356 767.576 488.095 765.72 488.097Z"
                fill="#E6E6E6"
              />
              <path
                d="M554.644 608.38C568.177 608.38 579.148 607.163 579.148 605.661C579.148 604.159 568.177 602.941 554.644 602.941C541.11 602.941 530.14 604.159 530.14 605.661C530.14 607.163 541.11 608.38 554.644 608.38Z"
                fill="#F2F2F2"
              />
              <path
                d="M335.644 288.38C349.177 288.38 360.148 287.163 360.148 285.661C360.148 284.159 349.177 282.941 335.644 282.941C322.11 282.941 311.14 284.159 311.14 285.661C311.14 287.163 322.11 288.38 335.644 288.38Z"
                fill="#F2F2F2"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_8">
                <rect width="891.295" height="745.194" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </main>
    </HomeStyleComponent>
  );
}

// Styled Componets
const HomeStyleComponent = styled.div`
  height: 100vh;
  width: 100vw;
  padding-left: 4rem;
  color: black;

  main {
    padding-left: 7rem;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .quote {
      @font-face {
        font-family: mon;
        src: url("/fonts/Montserrat.ttf");
      }

      font-family: mon;
      font-size: 5rem;
      font-weight: 600;
      height: 80%;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      @keyframes explosion {
        0% {
          content: "Chat.";
        }
        20% {
          content: "Discussion.";
        }
        40% {
          content: "Debate.";
        }
        60% {
          content: "Talk.";
        }
        80% {
          content: "Time.";
        }
        100% {
          content: "Chat.";
        }
      }

      p {
        color: #fe9c26;
        padding: 0;
        margin: 0;
        &:after {
          content: "";
          animation: explosion 7s linear infinite reverse;
        }
      }
    }

    .info-graphic {
      height: 80%;
      width: 50%;
      svg {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default Home;

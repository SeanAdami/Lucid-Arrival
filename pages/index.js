import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <!DOCTYPE html>
<html amp>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="8b v0.0.0.0, 8b.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="shortcut icon" href="https://app.8b.io/app/themes/webamp/projects/writer/assets/images/logo1.png"
        type="image/x-icon">
    <meta name="description" content="">
    <title>Lucid Arrival</title>

    <link rel="canonical" href="https://lucidarrival.com/">
    <style amp-boilerplate>
        body {
            -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
            animation: -amp-start 8s steps(1, end) 0s 1 normal both
        }

        @-webkit-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-moz-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-ms-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @-o-keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }

        @keyframes -amp-start {
            from {
                visibility: hidden
            }

            to {
                visibility: visible
            }
        }
    </style>
    <noscript>
        <style amp-boilerplate>
            body {
                -webkit-animation: none;
                -moz-animation: none;
                -ms-animation: none;
                animation: none
            }
        </style>
    </noscript>
    <link href="https://fonts.googleapis.com/css?family=Didact+Gothic&subset=cyrillic" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Tinos:400,400i,700,700i" rel="stylesheet">

    <style amp-custom>
        div,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        a,
        ol,
        ul,
        li,
        figcaption,
        textarea,
        input {
            font: inherit;
        }

        * {
            box-sizing: border-box;
            outline: none;
        }

        *:focus {
            outline: none;
        }

        body {
            position: relative;
            font-style: normal;
            line-height: 1.5;
            color: #000000;
        }

        section {
            background-color: #ffffff;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
            padding: 30px 0;
        }

        section,
        .container,
        .container-fluid {
            position: relative;
            word-wrap: break-word;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
            padding: 0;
        }

        p,
        li,
        blockquote {
            letter-spacing: 0.5px;
            line-height: 1.7;
        }

        ul,
        ol,
        blockquote,
        p {
            margin-bottom: 0;
            margin-top: 0;
        }

        a {
            cursor: pointer;
        }

        a,
        a:hover {
            text-decoration: none;
        }

        a.mbr-iconfont:hover {
            text-decoration: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        .display-1,
        .display-2,
        .display-4,
        .display-5,
        .display-7 {
            word-break: break-word;
            word-wrap: break-word;
        }

        b,
        strong {
            font-weight: bold;
        }

        blockquote {
            padding: 10px 0 10px 20px;
            position: relative;
            border-left: 3px solid;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
            transition-delay: 9999s;
            transition-property: background-color, color;
        }

        html,
        body {
            height: auto;
            min-height: 100vh;
        }

        .mbr-section-title {
            margin: 0;
            padding: 0;
            font-style: normal;
            line-height: 1.2;
            width: 100%;
        }

        .mbr-section-subtitle {
            line-height: 1.3;
            width: 100%;
        }

        .mbr-text {
            font-style: normal;
            line-height: 1.6;
            width: 100%;
        }

        .mbr-figure {
            align-self: center;
        }

        .btn {
            text-align: center;
            position: relative;
            margin: .4rem .8rem;
            font-weight: 700;
            border-width: 2px;
            border-style: solid;
            font-style: normal;
            white-space: normal;
            transition: all .2s ease-in-out, box-shadow 2s ease-in-out;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            word-break: break-word;
            line-height: 1.5;
            letter-spacing: 1px;
        }

        .btn-form {
            padding: 1rem 2rem;
        }

        .btn-form:hover {
            cursor: pointer;
        }

        .note-popover .btn:after {
            display: none;
        }

        .card-title {
            margin: 0;
        }

        .card-img {
            border-radius: 0;
            width: auto;
            flex-shrink: 0;
        }

        .card-img img {
            width: 100%;
        }

        .card {
            position: relative;
            background-color: transparent;
            border: none;
            border-radius: 0;
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        @media (max-width: 767px) {
            .card:not(.last-child) {
                padding-bottom: 2rem;
            }
        }

        .card .card-wrapper {
            height: 100%;
        }

        @media (max-width: 767px) {
            .card .card-wrapper {
                flex-direction: column;
            }
        }

        .card img {
            height: 100%;
            object-fit: cover;
            object-position: center;
        }

        @media (min-width: 992px) {
            .lg-pb {
                padding-bottom: 3rem;
            }
        }

        @media (max-width: 991px) {
            .md-pb {
                padding-bottom: 2rem;
            }
        }

        .card-inner,
        .items-list {
            display: flex;
            flex-direction: column;
        }

        .items-list {
            list-style-type: none;
            padding: 0;
        }

        .items-list .list-item {
            padding: 1rem 2rem;
        }

        .card-head {
            padding: 1.5rem 2rem;
        }

        .card-price-wrap {
            padding: 1rem 2rem;
            display: flex;
            flex-direction: column;
        }

        .card-button {
            padding: 1rem;
            margin: 0;
        }

        .gallery-img-wrap {
            position: relative;
            height: 100%;
        }

        .gallery-img-wrap:hover {
            cursor: pointer;
        }

        .gallery-img-wrap:hover .icon-wrap,
        .gallery-img-wrap:hover .caption-on-hover {
            opacity: 1;
        }

        .gallery-img-wrap:hover:after {
            opacity: .5;
        }

        .gallery-img-wrap amp-img {
            height: 100%;
        }

        .gallery-img-wrap:after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #000;
            opacity: 0;
            transition: opacity .3s;
            pointer-events: none;
        }

        .gallery-img-wrap .icon-wrap,
        .gallery-img-wrap .img-caption {
            position: absolute;
            z-index: 3;
            pointer-events: none;
        }

        .gallery-img-wrap .icon-wrap,
        .gallery-img-wrap .caption-on-hover {
            opacity: 0;
            transition: opacity .3s;
        }

        .gallery-img-wrap .icon-wrap {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            padding: .5rem;
            border-radius: 50%;
        }

        .gallery-img-wrap .img-caption {
            left: 0;
            right: 0;
        }

        .gallery-img-wrap .img-caption.caption-top {
            top: 0;
        }

        .gallery-img-wrap .img-caption.caption-bottom {
            bottom: 0;
        }

        .gallery-img-wrap .img-caption:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 100%;
            transition: opacity .3s;
            z-index: -1;
            pointer-events: none;
        }

        @media (max-width: 767px) {

            .gallery-img-wrap:after,
            .gallery-img-wrap:hover:after,
            .gallery-img-wrap .icon-wrap {
                display: none;
            }

            .gallery-img-wrap .caption-on-hover {
                opacity: 1;
            }
        }

        .is-builder .gallery-img-wrap .icon-wrap {
            pointer-events: all;
        }

        .is-builder .gallery-img-wrap .img-caption>* {
            pointer-events: all;
        }

        .icons-list a {
            margin-right: 1rem;
        }

        .icons-list a:last-child {
            margin-right: 0;
        }

        .counter-container {
            position: relative;
        }

        .counter-container ol li {
            margin-bottom: 2rem;
        }

        .counter-container.stylizedCounters ol {
            counter-reset: section;
        }

        .counter-container.stylizedCounters ol li {
            z-index: 3;
            list-style: none;
        }

        .counter-container.stylizedCounters ol li:before {
            z-index: 2;
            position: absolute;
            left: 0px;
            counter-increment: section;
            content: counters(section, ".") " ";
            text-align: center;
            margin: 0 10px;
            line-height: 37px;
            width: 40px;
            height: 40px;
            transition: all .2s;
            color: #232323;
            font-size: 25px;
            border-radius: 50%;
            font-weight: bold;
        }

        .timeline-wrap {
            position: relative;
        }

        .timeline-wrap .iconBackground {
            position: absolute;
            left: 50%;
            width: 20px;
            height: 20px;
            line-height: 30px;
            text-align: center;
            border-radius: 50%;
            font-size: 30px;
            display: inline-block;
            background-color: #232323;
            top: 20px;
            margin-left: -10px;
        }

        @media (max-width: 768px) {
            .timeline-wrap .iconBackground {
                left: 0;
            }
        }

        .separline {
            position: relative;
        }

        @media (max-width: 768px) {
            .separline:not(.last-child) {
                padding-bottom: 2rem;
            }
        }

        .separline:before {
            position: absolute;
            content: "";
            width: 2px;
            background-color: #232323;
            left: calc(50% - 1px);
            height: calc(100% - 20px);
            top: 40px;
        }

        @media (max-width: 768px) {
            .separline:before {
                left: 0;
            }
        }

        amp-image-lightbox a.control {
            position: absolute;
            width: 32px;
            height: 32px;
            right: 48px;
            top: 32px;
            z-index: 1000;
        }

        amp-image-lightbox a.control .close {
            position: relative;
        }

        amp-image-lightbox a.control .close:before,
        amp-image-lightbox a.control .close:after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #fff;
        }

        amp-image-lightbox a.control .close:before {
            transform: rotate(45deg);
        }

        amp-image-lightbox a.control .close:after {
            transform: rotate(-45deg);
        }

        .iconbox.iconfont-wrapper {
            cursor: pointer;
        }

        .iconbox.iconfont-wrapper svg {
            pointer-events: none;
        }

        .lightbox {
            background: rgba(0, 0, 0, 0.8);
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            flex-direction: column;
            -webkit-align-items: center;
            align-items: center;
            -webkit-justify-content: center;
            justify-content: center;
        }

        .lightbox .video-block {
            width: 100%;
        }

        .hidden {
            visibility: hidden;
        }

        .super-hide {
            display: none;
        }

        .inactive {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
            -webkit-user-drag: none;
        }

        .popover-content ul.show {
            min-height: 155px;
        }

        .mbr-white {
            color: #ffffff;
        }

        .mbr-black {
            color: #000000;
        }

        .align-left {
            text-align: left;
        }

        .align-left .list-item {
            justify-content: flex-start;
        }

        .align-center {
            text-align: center;
        }

        .align-center .list-item {
            justify-content: center;
        }

        .align-right {
            text-align: right;
        }

        .align-right .list-item {
            justify-content: flex-end;
        }

        @media (max-width: 767px) {

            .align-left,
            .align-center,
            .align-right {
                text-align: center;
            }

            .align-left .list-item,
            .align-center .list-item,
            .align-right .list-item {
                justify-content: center;
            }
        }

        .mbr-light {
            font-weight: 300;
        }

        .mbr-regular {
            font-weight: 400;
        }

        .mbr-semibold {
            font-weight: 500;
        }

        .mbr-bold {
            font-weight: 700;
        }

        .mbr-section-btn {
            margin-left: -.8rem;
            margin-right: -.8rem;
            font-size: 0;
        }

        nav .mbr-section-btn {
            margin-left: 0rem;
            margin-right: 0rem;
        }

        .btn .mbr-iconfont,
        .btn.btn-sm .mbr-iconfont {
            cursor: pointer;
            margin-right: 0.5rem;
        }

        .btn.btn-md .mbr-iconfont,
        .btn.btn-md .mbr-iconfont {
            margin-right: 0.8rem;
        }

        [type="submit"] {
            -webkit-appearance: none;
        }

        .mbr-fullscreen .mbr-overlay {
            min-height: 100vh;
        }

        .mbr-fullscreen {
            display: flex;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flex;
            display: -o-flex;
            align-items: center;
            -webkit-align-items: center;
            min-height: 100vh;
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        .mbr-overlay {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 0;
        }

        .mbr-parallax-bg {
            bottom: 0;
            left: 0;
            opacity: .5;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 0;
            background-position: 50% 50%;
            background-repeat: no-repeat;
            background-size: cover;
        }

        section.menu {
            min-height: 70px;
        }

        .menu-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 70px;
        }

        @media (max-width: 991px) {
            .menu-container {
                max-width: 100%;
                padding: 0 2rem;
            }
        }

        @media (max-width: 767px) {
            .menu-container {
                padding: 0 1rem;
            }
        }

        .navbar {
            z-index: 100;
            width: 100%;
        }

        .navbar-fixed-top {
            position: fixed;
            top: 0;
        }

        .navbar-brand {
            display: flex;
            align-items: center;
            word-break: break-word;
            z-index: 1;
        }

        .navbar-logo {
            margin-right: .8rem;
        }

        @media (max-width: 767px) {
            .navbar-logo amp-img {
                max-height: 55px;
                max-width: 55px;
            }
        }

        .navbar-caption-wrap {
            display: flex;
        }

        .navbar .navbar-collapse {
            display: flex;
            flex-basis: auto;
            align-items: center;
            justify-content: flex-end;
        }

        @media (max-width: 991px) {
            .navbar .navbar-collapse {
                display: none;
                position: absolute;
                top: 0;
                right: 0;
                min-height: 100vh;
                padding: 70px 2rem 1rem;
                z-index: 1;
            }
        }

        @media (max-width: 991px) {

            .navbar.opened .navbar-collapse.show,
            .navbar.opened .navbar-collapse.collapsing {
                display: block;
            }

            .is-builder .navbar-collapse {
                position: fixed;
            }
        }

        .navbar-nav {
            list-style-type: none;
            display: flex;
            flex-wrap: wrap;
            padding-left: 0;
            min-width: 10rem;
        }

        @media (max-width: 991px) {
            .navbar-nav {
                flex-direction: column;
            }
        }

        .navbar-nav .mbr-iconfont {
            margin-right: .2rem;
        }

        .nav-item {
            word-break: break-all;
        }

        .nav-link {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .nav-link,
        .navbar-caption {
            transition: all 0.2s;
            letter-spacing: 1px;
        }

        .nav-dropdown .dropdown-menu {
            min-width: 10rem;
            padding-bottom: 1.25rem;
            padding-top: 1.25rem;
            position: absolute;
            left: 0;
        }

        .nav-dropdown .dropdown-menu .dropdown-item {
            line-height: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: .25rem 1.5rem;
            white-space: nowrap;
        }

        .nav-dropdown .dropdown-menu .dropdown {
            position: relative;
        }

        .dropdown-menu .dropdown:hover>.dropdown-menu {
            opacity: 1;
            pointer-events: all;
        }

        .nav-dropdown .dropdown-submenu {
            top: 0;
            left: 100%;
            margin: 0;
        }

        .nav-item.dropdown {
            position: relative;
        }

        .nav-item.dropdown .dropdown-menu {
            opacity: 0;
            pointer-events: none;
        }

        .nav-item.dropdown:hover>.dropdown-menu {
            opacity: 1;
            pointer-events: all;
        }

        .link.dropdown-toggle:after {
            content: '';
            margin-left: .25rem;
            border-top: 0.35em solid;
            border-right: 0.35em solid transparent;
            border-left: 0.35em solid transparent;
            border-bottom: 0;
        }

        .navbar .dropdown.open>.dropdown-menu {
            display: block;
        }

        @media (max-width: 991px) {
            .is-builder .nav-dropdown .dropdown-menu {
                position: relative;
            }

            .nav-dropdown .dropdown-submenu {
                left: 0;
            }

            .dropdown-item {
                padding: .25rem 1.5rem;
                margin: 0;
                justify-content: center;
            }

            .dropdown-item:after {
                right: auto;
            }

            .navbar.opened .dropdown-menu {
                top: 0;
            }

            .dropdown-toggle[data-toggle="dropdown-submenu"]:after {
                content: '';
                margin-left: .25rem;
                border-top: .35em solid;
                border-right: .35em solid transparent;
                border-left: .35em solid transparent;
                border-bottom: 0;
                top: 55%;
            }
        }

        .navbar-buttons {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        @media (max-width: 991px) {
            .navbar-buttons {
                flex-direction: column;
            }
        }

        .menu-social-list {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .menu-social-list a {
            margin: 0 .5rem;
        }

        button.navbar-toggler {
            position: absolute;
            right: 20px;
            top: 25px;
            width: 31px;
            height: 20px;
            cursor: pointer;
            transition: all .2s;
            align-self: center;
        }

        .hamburger span {
            position: absolute;
            right: 0;
            width: 30px;
            height: 2px;
            border-right: 5px;
        }

        .hamburger span:nth-child(1) {
            top: 0;
            transition: all .2s;
        }

        .hamburger span:nth-child(2) {
            top: 8px;
            transition: all .15s;
        }

        .hamburger span:nth-child(3) {
            top: 8px;
            transition: all .15s;
        }

        .hamburger span:nth-child(4) {
            top: 16px;
            transition: all .2s;
        }

        nav.opened .navbar-toggler:not(.hide) .hamburger span:nth-child(1) {
            top: 8px;
            width: 0;
            opacity: 0;
            right: 50%;
            transition: all .2s;
        }

        nav.opened .navbar-toggler:not(.hide) .hamburger span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            transition: all .25s;
        }

        nav.opened .navbar-toggler:not(.hide) .hamburger span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            transition: all .25s;
        }

        nav.opened .navbar-toggler:not(.hide) .hamburger span:nth-child(4) {
            top: 8px;
            width: 0;
            opacity: 0;
            right: 50%;
            transition: all .2s;
        }

        .ampstart-btn.hamburger {
            position: absolute;
            top: 25px;
            right: 15px;
            margin-left: auto;
            width: 30px;
            height: 20px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1000;
        }

        @media (min-width: 992px) {

            .ampstart-btn,
            amp-sidebar {
                display: none;
            }

            .dropdown-menu .dropdown-toggle:after {
                content: '';
                border-bottom: 0.35em solid transparent;
                border-left: 0.35em solid;
                border-right: 0;
                border-top: 0.35em solid transparent;
                margin-left: 0.3rem;
                margin-top: -0.3077em;
                position: absolute;
                right: 1.1538em;
                top: 50%;
            }
        }

        .close-sidebar {
            width: 30px;
            height: 30px;
            position: relative;
            cursor: pointer;
            background-color: transparent;
            border: none;
        }

        .close-sidebar span {
            position: absolute;
            left: 0;
            width: 30px;
            height: 2px;
            border-right: 5px;
        }

        .close-sidebar span:nth-child(1) {
            transform: rotate(45deg);
        }

        .close-sidebar span:nth-child(2) {
            transform: rotate(-45deg);
        }

        .builder-sidebar {
            position: relative;
            min-height: 100vh;
            z-index: 1030;
            padding: 1rem 2rem;
            max-width: 20rem;
        }

        .builder-sidebar .dropdown:hover>.dropdown-menu {
            position: relative;
            text-align: center;
        }

        section.sidebar-open:before {
            content: '';
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 1040;
        }

        .map-placeholder {
            display: none;
        }

        .map-placeholder h4 {
            padding-top: 5rem;
            color: #767676;
            text-align: center;
        }

        .google-map {
            position: relative;
            width: 100%;
        }

        @media (max-width: 992px) {
            .google-map {
                padding: 0;
                margin: 0;
            }
        }

        .google-map [data-state-details] {
            color: #6b6763;
            font-family: Montserrat;
            height: 1.5em;
            margin-top: -0.75em;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            position: absolute;
            text-align: center;
            top: 50%;
            width: 100%;
        }

        .google-map[data-state] {
            background: #e9e5dc;
        }

        .google-map[data-state="loading"] [data-state-details] {
            display: none;
        }

        div[submit-success] {
            padding: 1rem;
            margin-bottom: 1rem;
        }

        div[submit-error] {
            padding: 1rem;
            margin-bottom: 1rem;
        }

        textarea[type="hidden"] {
            display: none;
        }

        amp-img {
            width: 100%;
        }

        amp-img img {
            max-height: 100%;
            max-width: 100%;
        }

        img.mbr-temp {
            width: 100%;
        }

        .rounded {
            border-radius: 50%;
        }

        .is-builder .nodisplay+img[async],
        .is-builder .nodisplay+img[decoding="async"],
        .is-builder amp-img>a+img[async],
        .is-builder amp-img>a+img[decoding="async"] {
            display: none;
        }

        html:not(.is-builder) amp-img>a {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }

        .is-builder .temp-amp-sizer {
            position: absolute;
        }

        .is-builder amp-youtube .temp-amp-sizer,
        .is-builder amp-vimeo .temp-amp-sizer {
            position: static;
        }

        .is-builder section.horizontal-menu .ampstart-btn {
            display: none;
        }

        .is-builder section.horizontal-menu .dropdown-menu {
            z-index: auto;
            opacity: 1;
            pointer-events: auto;
        }

        .is-builder section.horizontal-menu .nav-dropdown .link.dropdown-toggle[aria-expanded="true"] {
            margin-right: 0;
            padding: 0.667em 1em;
        }

        div.placeholder {
            z-index: 4;
            background: rgba(255, 255, 255, 0.5);
        }

        div.placeholder svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20%;
            height: auto;
        }

        div.placeholder svg circle.big {
            animation: big-anim 3s linear infinite;
        }

        div.placeholder svg circle.small {
            animation: small-anim 1.5s linear infinite;
        }

        @keyframes big-anim {
            from {
                stroke-dashoffset: 900;
            }

            to {
                stroke-dashoffset: 0;
            }
        }

        @keyframes small-anim {
            from {
                stroke-dashoffset: 850;
            }

            to {
                stroke-dashoffset: 0;
            }
        }

        .placeholder-loader .amp-active>div {
            display: none;
        }

        .container {
            padding-right: 1rem;
            padding-left: 1rem;
            width: 100%;
            margin-right: auto;
            margin-left: auto;
        }

        @media (max-width: 767px) {
            .container {
                max-width: 540px;
            }
        }

        @media (min-width: 768px) {
            .container {
                max-width: 720px;
            }
        }

        @media (min-width: 992px) {
            .container {
                max-width: 960px;
            }
        }

        @media (min-width: 1200px) {
            .container {
                max-width: 1140px;
            }
        }

        .container-fluid {
            width: 100%;
            margin-right: auto;
            margin-left: auto;
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .media-container-row {
            display: flex;
            flex-wrap: wrap;
        }

        @media (min-width: 992px) {
            .media-container-row {
                flex-wrap: nowrap;
            }
        }

        .mbr-flex {
            display: flex;
        }

        .flex-wrap {
            flex-wrap: wrap;
        }

        .mbr-jc-s {
            justify-content: flex-start;
        }

        .mbr-jc-c {
            justify-content: center;
        }

        .mbr-jc-e {
            justify-content: flex-end;
        }

        .mbr-row {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -1rem;
            margin-left: -1rem;
        }

        .mbr-row-reverse {
            flex-direction: row-reverse;
        }

        .mbr-column {
            flex-direction: column;
        }

        @media (max-width: 767px) {
            .mbr-col-sm-12 {
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
                padding-right: 1rem;
                padding-left: 1rem;
            }
        }

        @media (min-width: 768px) {
            .mbr-col-md-3 {
                -ms-flex: 0 0 25%;
                flex: 0 0 25%;
                max-width: 25%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-md-4 {
                -ms-flex: 0 0 33.333333%;
                flex: 0 0 33.333333%;
                max-width: 33.333333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-md-5 {
                -ms-flex: 0 0 41.666667%;
                flex: 0 0 41.666667%;
                max-width: 41.666667%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-md-6 {
                -ms-flex: 0 0 50%;
                flex: 0 0 50%;
                max-width: 50%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-md-7 {
                -ms-flex: 0 0 58.333333%;
                flex: 0 0 58.333333%;
                max-width: 58.333333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-md-8 {
                -ms-flex: 0 0 66.666667%;
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .mbr-col-md-10 {
                -ms-flex: 0 0 83.333333%;
                flex: 0 0 83.333333%;
                max-width: 83.333333%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .mbr-col-md-12 {
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
                padding-right: 1rem;
                padding-left: 1rem;
            }
        }

        @media (min-width: 992px) {
            .mbr-col-lg-2 {
                -ms-flex: 0 0 16.666667%;
                flex: 0 0 16.666667%;
                max-width: 16.666667%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-3 {
                -ms-flex: 0 0 25%;
                flex: 0 0 25%;
                max-width: 25%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-4 {
                -ms-flex: 0 0 33.33%;
                flex: 0 0 33.33%;
                max-width: 33.33%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-5 {
                -ms-flex: 0 0 41.666%;
                flex: 0 0 41.666%;
                max-width: 41.666%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-6 {
                -ms-flex: 0 0 50%;
                flex: 0 0 50%;
                max-width: 50%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-7 {
                -ms-flex: 0 0 58.333333%;
                flex: 0 0 58.333333%;
                max-width: 58.333333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-8 {
                -ms-flex: 0 0 66.666667%;
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .mbr-col-lg-9 {
                -ms-flex: 0 0 75%;
                flex: 0 0 75%;
                max-width: 75%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .mbr-col-lg-10 {
                -ms-flex: 0 0 83.3333%;
                flex: 0 0 83.3333%;
                max-width: 83.3333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-lg-12 {
                -ms-flex: 0 0 100%;
                flex: 0 0 100%;
                max-width: 100%;
                padding-right: 1rem;
                padding-left: 1rem;
            }
        }

        @media (min-width: 1200px) {
            .mbr-col-xl-7 {
                -ms-flex: 0 0 58.333333%;
                flex: 0 0 58.333333%;
                max-width: 58.333333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-xl-4 {
                -ms-flex: 0 0 33.333333%;
                flex: 0 0 33.333333%;
                max-width: 33.333333%;
                padding-right: 1rem;
                padding-left: 1rem;
            }

            .mbr-col-xl-8 {
                -ms-flex: 0 0 66.666667%;
                flex: 0 0 66.666667%;
                max-width: 66.666667%;
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .mbr-col-xl-5 {
                -ms-flex: 0 0 41.666667%;
                flex: 0 0 41.666667%;
                max-width: 41.666667%;
            }
        }

        .mbr-pt-1 {
            padding-top: .5rem;
        }

        .mbr-pt-2 {
            padding-top: 1rem;
        }

        .mbr-pt-3 {
            padding-top: 1.5rem;
        }

        .mbr-pt-4 {
            padding-top: 2rem;
        }

        .mbr-pt-5 {
            padding-top: 3rem;
        }

        .mbr-pb-1 {
            padding-bottom: .5rem;
        }

        .mbr-pb-2 {
            padding-bottom: 1rem;
        }

        .mbr-pb-3 {
            padding-bottom: 1.5rem;
        }

        .mbr-pb-4 {
            padding-bottom: 2rem;
        }

        .mbr-pb-5 {
            padding-bottom: 3rem;
        }

        .mbr-px-1 {
            padding-left: .5rem;
            padding-right: .5rem;
        }

        .mbr-px-2 {
            padding-left: 1rem;
            padding-right: 1rem;
        }

        .mbr-px-3 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        .mbr-px-4 {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        @media (max-width: 991px) {
            .mbr-px-4 {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }

        .mbr-px-5 {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        @media (max-width: 991px) {
            .mbr-px-5 {
                padding-left: 1rem;
                padding-right: 1rem;
            }
        }

        .mbr-m-sub-1 {
            margin-left: -1rem;
            margin-right: -1rem;
        }

        @media (max-width: 768px) {
            .mbr-m-sub-1 {
                margin-left: 0;
                margin-right: 0;
            }
        }

        .mbr-py-1 {
            padding-top: .5rem;
            padding-bottom: .5rem;
        }

        .mbr-py-2 {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        @media (max-width: 767px) {
            .mbr-py-2 {
                padding-top: 0rem;
                padding-bottom: 0rem;
            }
        }

        .mbr-py-3 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
        }

        @media (max-width: 991px) {
            .mbr-py-3 {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }

        .mbr-py-4 {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        @media (max-width: 991px) {
            .mbr-py-4 {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }

        .mbr-py-5 {
            padding-top: 3rem;
            padding-bottom: 3rem;
        }

        @media (max-width: 991px) {
            .mbr-py-5 {
                padding-top: 1rem;
                padding-bottom: 1rem;
            }
        }

        .mbr-p-1 {
            padding: .5rem;
        }

        .mbr-p-2 {
            padding: 1rem;
        }

        .mbr-p-3 {
            padding: 1.5rem;
        }

        @media (max-width: 991px) {
            .mbr-p-3 {
                padding: 1rem;
            }
        }

        .mbr-p-4 {
            padding: 2rem;
        }

        @media (max-width: 991px) {
            .mbr-p-4 {
                padding: 1rem;
            }
        }

        .mbr-p-5 {
            padding: 3rem;
        }

        @media (max-width: 991px) {
            .mbr-p-5 {
                padding: 1rem;
            }
        }

        .mbr-ml-auto {
            margin-left: auto;
        }

        .mbr-mr-auto {
            margin-right: auto;
        }

        .mbr-m-auto {
            margin: auto;
        }

        .form-block {
            z-index: 1;
            background-color: transparent;
            padding: 3rem;
            position: relative;
            overflow: visible;
        }

        .form-block .mbr-overlay {
            z-index: -1;
        }

        @media (max-width: 992px) {
            .form-block {
                padding: 1rem;
            }
        }

        .form-block input,
        .form-block textarea {
            border-radius: 0;
            background-color: #ffffff;
            margin: 0;
            transition: 0.4s;
            width: 100%;
            border: 1px solid #e0e0e0;
            padding: 11px 1rem;
        }

        form .fieldset {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            align-items: center;
        }

        .field {
            flex-basis: auto;
            flex-grow: 1;
            flex-shrink: 1;
            padding: 0.5rem;
        }

        @media (max-width: 768px) {
            .field {
                flex-basis: 100%;
            }
        }

        textarea {
            width: 100%;
            margin-right: 0;
        }

        .text-field {
            flex-basis: 100%;
            flex-grow: 1rem;
            flex-shrink: 1;
            padding: 0.5rem;
        }

        amp-img,
        img {
            height: 100%;
            width: 100%;
        }

        amp-sidebar {
            background: transparent;
        }

        .is-builder .menu {
            overflow: visible;
        }

        .is-builder .preview button {
            opacity: 0.5;
            position: relative;
            pointer-events: none;
        }

        .is-builder .preview button:before {
            display: block;
            position: absolute;
            content: '';
            background-color: #efefef;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 2;
        }

        .hidden-slide {
            display: none;
        }

        .visible-slide {
            display: flex;
        }

        .dots-wrapper .dots {
            margin: 4px 8px;
        }

        .dots-wrapper .dots span {
            cursor: pointer;
            border-radius: 12px;
            display: block;
            height: 24px;
            width: 24px;
            transition: 0.4s;
            border: 10px solid #cccccc;
        }

        .dots-wrapper .dots span:hover {
            opacity: 1;
        }

        .dots-wrapper .dots span.current {
            outline: none;
            width: 40px;
            opacity: 1;
        }

        .amp-carousel-button {
            outline: none;
            border-radius: 50%;
            border: 10px transparent solid;
            transform: scale(1.5) translateY(-50%);
            height: 45px;
            width: 45px;
            transition: 0.4s;
            cursor: pointer;
        }

        .amp-carousel-button:hover {
            opacity: 1;
        }

        .amp-carousel-button-next {
            background-position: 75% 50%;
        }

        .amp-carousel-button-prev {
            background-position: 25% 50%;
        }

        button.btn-img {
            cursor: pointer;
        }

        .iconfont-wrapper {
            display: inline-block;
            width: 1.5rem;
            height: 1.5rem;
        }

        .amp-iconfont {
            vertical-align: middle;
            width: 1.5rem;
            height: 100%;
            font-size: 1.5rem;
        }

        #freeversion-wrapper {
            position: relative;
            z-index: 1000;
        }

        @media (max-width: 767px) {
            #freeversion-wrapper {
                position: sticky;
                bottom: 0;
            }
        }

        #freeversion {
            text-align: center;
            display: flex;
            background-color: #fff;
            border-top: 2px solid #efefef;
            border-left: 1px solid #efefef;
            bottom: 0;
            right: 0;
            justify-content: center;
            padding: 1rem;
        }

        @media (min-width: 768px) {
            #freeversion {
                position: fixed;
            }
        }

        #freeversion>* {
            display: flex;
            align-self: center;
        }

        @media (max-width: 767px) {
            #freeversion {
                width: 100%;
            }
        }

        #freeversion .freeversion {
            color: #000;
        }

        @media (min-width: 768px) {
            #freeversion .freeversion {
                max-width: 160px;
            }
        }

        #freeversion .btn-wrap .btn {
            padding: 5px;
            white-space: nowrap;
        }

        @media (max-width: 992px) {
            #freeversion .btn-wrap .btn {
                margin: 0;
                white-space: normal;
            }
        }

        @media (max-width: 992px) {

            #freeversion>*,
            #freeversion .btn-wrap .btn {
                padding: 5px;
            }
        }

        body {
            font-family: Didact Gothic;
        }

        blockquote {
            border-color: #4289a7;
        }

        div[submit-success] {
            background: #365c9a;
        }

        div[submit-error] {
            background: #b2ccd2;
        }

        .display-1 {
            font-family: 'Didact Gothic', sans-serif;
            font-size: 5rem;
            line-height: 1.2;
        }

        .display-2 {
            font-family: 'Tinos', serif;
            font-size: 2.875rem;
            line-height: 1.2;
        }

        .display-4 {
            font-family: 'Didact Gothic', sans-serif;
            font-size: 1rem;
            line-height: 1.4;
        }

        .display-5 {
            font-family: 'Didact Gothic', sans-serif;
            font-size: 1.4rem;
            line-height: 1.2;
        }

        .display-7 {
            font-family: 'Tinos', serif;
            font-size: 1.4rem;
            line-height: 1.6;
        }

        .form-block input,
        .form-block textarea {
            font-family: 'Tinos', serif;
            font-size: 1.4rem;
            line-height: 1.6;
        }

        @media (max-width: 768px) {
            .display-1 {
                font-size: 4rem;
                font-size: calc(2.4rem + (5 - 2.4) * ((100vw - 20rem) / (48 - 20)));
                line-height: calc(1.4 * (2.4rem + (5 - 2.4) * ((100vw - 20rem) / (48 - 20))));
            }

            .display-2 {
                font-size: 2.3rem;
                font-size: calc(1.65625rem + (2.875 - 1.65625) * ((100vw - 20rem) / (48 - 20)));
                line-height: calc(1.4 * (1.65625rem + (2.875 - 1.65625) * ((100vw - 20rem) / (48 - 20))));
            }

            .display-4 {
                font-size: 0.8rem;
                font-size: calc(1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20)));
                line-height: calc(1.4 * (1rem + (1 - 1) * ((100vw - 20rem) / (48 - 20))));
            }

            .display-5 {
                font-size: 1.12rem;
                font-size: calc(1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20)));
                line-height: calc(1.4 * (1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20))));
            }

            .display-7 {
                font-size: 1.12rem;
                font-size: calc(1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20)));
                line-height: calc(1.4 * (1.14rem + (1.4 - 1.14) * ((100vw - 20rem) / (48 - 20))));
            }
        }

        .display-1 .mbr-iconfont-btn {
            font-size: 5rem;
            width: 5rem;
        }

        .display-2 .mbr-iconfont-btn {
            font-size: 2.875rem;
            width: 2.875rem;
        }

        .display-4 .mbr-iconfont-btn {
            font-size: 1rem;
            width: 1rem;
        }

        .display-5 .mbr-iconfont-btn {
            font-size: 1.4rem;
            width: 1.4rem;
        }

        .display-7 .mbr-iconfont-btn {
            font-size: 1.4rem;
            width: 1.4rem;
        }

        .btn {
            padding: 10px 30px;
            border-radius: 0px;
        }

        .btn-sm {
            padding: 10px 30px;
            border-radius: 0px;
        }

        .btn-md {
            padding: 10px 30px;
            border-radius: 0px;
        }

        .btn-lg {
            padding: 10px 30px;
            border-radius: 0;
        }

        .bg-primary {
            background-color: #4289a7;
        }

        .bg-success {
            background-color: #365c9a;
        }

        .bg-info {
            background-color: #e96188;
        }

        .bg-warning {
            background-color: #1db954;
        }

        .bg-danger {
            background-color: #b2ccd2;
        }

        .btn-secondary,
        .btn-secondary:active,
        .btn-secondary.active {
            background-color: #ca4336;
            border-color: #ca4336;
            color: #ffffff;
        }

        .btn-secondary:hover,
        .btn-secondary:focus,
        .btn-secondary.focus {
            background-color: #7a2820;
            border-color: #7a2820;
            color: #ffffff;
        }

        .btn-secondary.disabled,
        .btn-secondary:disabled {
            color: #ffffff;
            background-color: #7a2820;
            border-color: #7a2820;
        }

        .btn-info,
        .btn-info:active,
        .btn-info.active {
            background-color: #e96188;
            border-color: #e96188;
            color: #ffffff;
        }

        .btn-info:hover,
        .btn-info:focus,
        .btn-info.focus {
            background-color: #c81c4d;
            border-color: #c81c4d;
            color: #ffffff;
        }

        .btn-info.disabled,
        .btn-info:disabled {
            color: #ffffff;
            background-color: #c81c4d;
            border-color: #c81c4d;
        }

        .btn-success,
        .btn-success:active,
        .btn-success.active {
            background-color: #365c9a;
            border-color: #365c9a;
            color: #ffffff;
        }

        .btn-success:hover,
        .btn-success:focus,
        .btn-success.focus {
            background-color: #1c2f4e;
            border-color: #1c2f4e;
            color: #ffffff;
        }

        .btn-success.disabled,
        .btn-success:disabled {
            color: #ffffff;
            background-color: #1c2f4e;
            border-color: #1c2f4e;
        }

        .btn-warning,
        .btn-warning:active,
        .btn-warning.active {
            background-color: #1db954;
            border-color: #1db954;
            color: #ffffff;
        }

        .btn-warning:hover,
        .btn-warning:focus,
        .btn-warning.focus {
            background-color: #0f612c;
            border-color: #0f612c;
            color: #ffffff;
        }

        .btn-warning.disabled,
        .btn-warning:disabled {
            color: #ffffff;
            background-color: #0f612c;
            border-color: #0f612c;
        }

        .btn-danger,
        .btn-danger:active,
        .btn-danger.active {
            background-color: #b2ccd2;
            border-color: #b2ccd2;
            color: #ffffff;
        }

        .btn-danger:hover,
        .btn-danger:focus,
        .btn-danger.focus {
            background-color: #72a1ac;
            border-color: #72a1ac;
            color: #ffffff;
        }

        .btn-danger.disabled,
        .btn-danger:disabled {
            color: #ffffff;
            background-color: #72a1ac;
            border-color: #72a1ac;
        }

        .btn-primary,
        .btn-primary:active,
        .btn-primary.active {
            background-color: #4289a7;
            border-color: #4289a7;
            color: #ffffff;
        }

        .btn-primary:hover,
        .btn-primary:focus,
        .btn-primary.focus {
            background-color: #254d5e;
            border-color: #254d5e;
            color: #ffffff;
        }

        .btn-primary.disabled,
        .btn-primary:disabled {
            color: #ffffff;
            background-color: #254d5e;
            border-color: #254d5e;
        }

        .btn-black,
        .btn-black:active,
        .btn-black.active {
            background-color: #010101;
            border-color: #010101;
            color: #ffffff;
        }

        .btn-black:hover,
        .btn-black:focus,
        .btn-black.focus {
            background-color: #000000;
            border-color: #000000;
            color: #ffffff;
        }

        .btn-black.disabled,
        .btn-black:disabled {
            color: #ffffff;
            background-color: #000000;
            border-color: #000000;
        }

        .btn-white,
        .btn-white:active,
        .btn-white.active {
            background-color: #fcfcfc;
            border-color: #fcfcfc;
            color: #7d7d7d;
        }

        .btn-white:hover,
        .btn-white:focus,
        .btn-white.focus {
            background-color: #c9c9c9;
            border-color: #c9c9c9;
            color: #7d7d7d;
        }

        .btn-white.disabled,
        .btn-white:disabled {
            color: #7d7d7d;
            background-color: #c9c9c9;
            border-color: #c9c9c9;
        }

        .btn-primary-outline,
        .btn-primary-outline:active,
        .btn-primary-outline.active {
            background: none;
            border-color: #4289a7;
            color: #4289a7;
        }

        .btn-primary-outline:hover,
        .btn-primary-outline:focus,
        .btn-primary-outline.focus {
            color: #ffffff;
            background-color: #4289a7;
            border-color: #4289a7;
        }

        .btn-primary-outline.disabled,
        .btn-primary-outline:disabled {
            color: #ffffff;
            background-color: #4289a7;
            border-color: #4289a7;
        }

        .btn-secondary-outline,
        .btn-secondary-outline:active,
        .btn-secondary-outline.active {
            background: none;
            border-color: #ca4336;
            color: #ca4336;
        }

        .btn-secondary-outline:hover,
        .btn-secondary-outline:focus,
        .btn-secondary-outline.focus {
            color: #ffffff;
            background-color: #ca4336;
            border-color: #ca4336;
        }

        .btn-secondary-outline.disabled,
        .btn-secondary-outline:disabled {
            color: #ffffff;
            background-color: #ca4336;
            border-color: #ca4336;
        }

        .btn-info-outline,
        .btn-info-outline:active,
        .btn-info-outline.active {
            background: none;
            border-color: #e96188;
            color: #e96188;
        }

        .btn-info-outline:hover,
        .btn-info-outline:focus,
        .btn-info-outline.focus {
            color: #ffffff;
            background-color: #e96188;
            border-color: #e96188;
        }

        .btn-info-outline.disabled,
        .btn-info-outline:disabled {
            color: #ffffff;
            background-color: #e96188;
            border-color: #e96188;
        }

        .btn-success-outline,
        .btn-success-outline:active,
        .btn-success-outline.active {
            background: none;
            border-color: #365c9a;
            color: #365c9a;
        }

        .btn-success-outline:hover,
        .btn-success-outline:focus,
        .btn-success-outline.focus {
            color: #ffffff;
            background-color: #365c9a;
            border-color: #365c9a;
        }

        .btn-success-outline.disabled,
        .btn-success-outline:disabled {
            color: #ffffff;
            background-color: #365c9a;
            border-color: #365c9a;
        }

        .btn-warning-outline,
        .btn-warning-outline:active,
        .btn-warning-outline.active {
            background: none;
            border-color: #1db954;
            color: #1db954;
        }

        .btn-warning-outline:hover,
        .btn-warning-outline:focus,
        .btn-warning-outline.focus {
            color: #ffffff;
            background-color: #1db954;
            border-color: #1db954;
        }

        .btn-warning-outline.disabled,
        .btn-warning-outline:disabled {
            color: #ffffff;
            background-color: #1db954;
            border-color: #1db954;
        }

        .btn-danger-outline,
        .btn-danger-outline:active,
        .btn-danger-outline.active {
            background: none;
            border-color: #b2ccd2;
            color: #b2ccd2;
        }

        .btn-danger-outline:hover,
        .btn-danger-outline:focus,
        .btn-danger-outline.focus {
            color: #ffffff;
            background-color: #b2ccd2;
            border-color: #b2ccd2;
        }

        .btn-danger-outline.disabled,
        .btn-danger-outline:disabled {
            color: #ffffff;
            background-color: #b2ccd2;
            border-color: #b2ccd2;
        }

        .btn-black-outline,
        .btn-black-outline:active,
        .btn-black-outline.active {
            background: none;
            border-color: #010101;
            color: #010101;
        }

        .btn-black-outline:hover,
        .btn-black-outline:focus,
        .btn-black-outline.focus {
            color: #ffffff;
            background-color: #010101;
            border-color: #010101;
        }

        .btn-black-outline.disabled,
        .btn-black-outline:disabled {
            color: #ffffff;
            background-color: #010101;
            border-color: #010101;
        }

        .btn-white-outline,
        .btn-white-outline:active,
        .btn-white-outline.active {
            background: none;
            border-color: #fcfcfc;
            color: #fcfcfc;
        }

        .btn-white-outline:hover,
        .btn-white-outline:focus,
        .btn-white-outline.focus {
            color: #7d7d7d;
            background-color: #fcfcfc;
            border-color: #fcfcfc;
        }

        .btn-white-outline.disabled,
        .btn-white-outline:disabled {
            color: #7d7d7d;
            background-color: #fcfcfc;
            border-color: #fcfcfc;
        }

        .text-primary {
            color: #4289a7;
        }

        .text-secondary {
            color: #ca4336;
        }

        .text-success {
            color: #365c9a;
        }

        .text-info {
            color: #e96188;
        }

        .text-warning {
            color: #1db954;
        }

        .text-danger {
            color: #b2ccd2;
        }

        .text-white {
            color: #fcfcfc;
        }

        .text-black {
            color: #010101;
        }

        a[class*="text-"],
        .amp-iconfont,
        .mbr-iconfont {
            transition: 0.2s ease-in-out;
        }

        .amp-iconfont {
            color: #4289a7;
        }

        a.text-primary:hover,
        a.text-primary:focus {
            color: #172f39;
        }

        a.text-secondary:hover,
        a.text-secondary:focus {
            color: #521b15;
        }

        a.text-success:hover,
        a.text-success:focus {
            color: #0e1829;
        }

        a.text-info:hover,
        a.text-info:focus {
            color: #9b163c;
        }

        a.text-warning:hover,
        a.text-warning:focus {
            color: #083518;
        }

        a.text-danger:hover,
        a.text-danger:focus {
            color: #578994;
        }

        a.text-white:hover,
        a.text-white:focus {
            color: #e6e6e6;
        }

        a.text-black:hover,
        a.text-black:focus {
            color: #cccccc;
        }

        .alert-success {
            background-color: #365c9a;
        }

        .alert-info {
            background-color: #e96188;
        }

        .alert-warning {
            background-color: #1db954;
        }

        .alert-danger {
            background-color: #b2ccd2;
        }

        .mbr-plan-header.bg-primary .mbr-plan-subtitle,
        .mbr-plan-header.bg-primary .mbr-plan-price-desc {
            color: #94c1d5;
        }

        .mbr-plan-header.bg-success .mbr-plan-subtitle,
        .mbr-plan-header.bg-success .mbr-plan-price-desc {
            color: #7e9ed2;
        }

        .mbr-plan-header.bg-info .mbr-plan-subtitle,
        .mbr-plan-header.bg-info .mbr-plan-price-desc {
            color: #ffffff;
        }

        .mbr-plan-header.bg-warning .mbr-plan-subtitle,
        .mbr-plan-header.bg-warning .mbr-plan-price-desc {
            color: #6de899;
        }

        .mbr-plan-header.bg-danger .mbr-plan-subtitle,
        .mbr-plan-header.bg-danger .mbr-plan-price-desc {
            color: #ffffff;
        }

        amp-carousel {
            overflow: hidden;
        }

        .cid-t0LYCZebOr {
            background-image: url("https://r.8b.io/472557/images/mbr-h_l11iibd6-1920x1280.jpg");
            align-items: center;
            display: flex;
        }

        .cid-t0LYCZebOr .main-letter {
            font-size: 7rem;
        }

        .cid-t0LYCZebOr .mbr-section-title,
        .cid-t0LYCZebOr .mbr-section-btn {
            color: #fafafa;
        }

        .cid-t0LYCZebOr .mbr-section-subtitle,
        .cid-t0LYCZebOr .mbr-section-btn {
            color: #333333;
        }

        .cid-t0LYCZebOr .mbr-section-title,
        .cid-t0LYCZebOr .mbr-section-btn SPAN {
            color: #333333;
        }

        .cid-r9tQDXn5n6 {
            padding-top: 2rem;
            padding-bottom: 2rem;
            background-color: #000000;
        }

        .cid-r9tQDXn5n6 .link-items .fLink {
            width: auto;
        }

        .cid-r9tQDXn5n6 .mbr-row {
            margin: 0;
        }

        .cid-r9tQDXn5n6 .mbr-row:nth-child(1) {
            margin-bottom: 1rem;
        }

        [class*="-iconfont"] {
            display: inline-flex;
        }

        #eightBBanner {
            position: fixed;
            top: 0;
            z-index: 999;
            width: 100%;
            background: #fff;
            padding: 10px;
            min-height: 10rem;
            animation: 4s linear animBanner;
        }

        .navbar {
            top: 10rem;
            z-index: 100;
            animation: 4s linear animHeight;
        }

        @media (max-width: 575px) {
            #eightBBanner {
                min-height: 13rem;
            }

            .navbar {
                top: 13rem;
            }
        }

        #eightBBanner p {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        #eightBBanner.banner {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        #eightBBanner .buy-license {
            text-decoration: underline;
        }

        #eightBBanner .btn {
            margin-left: 0.5rem;
            margin-right: 0.5rem;
        }

        #eightBBanner .mbr-section-abuse-report {
            font-size: 0.8rem;
        }

        #eightBBanner .mbr-section-abuse-report a {
            color: #aaa;
        }
    </style>

    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>


</head>

<body>
    <section class="header1 cid-t0LYCZebOr mbr-fullscreen" id="header1-1f">


        <div class="container">
            <div class="mbr-row align-left">
                <div class="title-block mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-6">
                    <h1 class="mbr-section-title mbr-fonts-style mbr-bold display-1">LUCID ARRIVAL.</h1>


                    <div class="mbr-section-btn mbr-pt-4"><a class="btn btn-black-outline display-5"
                            href="book.html">Enter</a></div>
                </div>
            </div>
        </div>
    </section>

    <section class="footer1 cid-r9tQDXn5n6" id="footer1-o">


        <div class="footer-container container-fluid">

            <div class="copyright mbr-px-2 mbr-flex mbr-jc-c">
                <p class="mbr-text mbr-fonts-style mbr-white align-center display-4">© <span>2022</span> <span>Sean
                        Adami</span></p>
            </div>
        </div>
    </section>
</body>

</html>

      <main>
        <Header title="hi" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

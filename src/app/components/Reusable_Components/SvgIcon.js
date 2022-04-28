import React from "react";
import { SvgIconType } from "../../constants/constants";

class SvgIcon extends React.Component {
  render() {
    switch (this.props.type) {
      case SvgIconType.Edit:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-pencil-square"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        );
      case SvgIconType.Delete:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-trash-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
        );
      case SvgIconType.Duplicate:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-files"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3z"
            />
            <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
          </svg>
        );
      case SvgIconType.Name:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-person-circle"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
            <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
            />
          </svg>
        );
      case SvgIconType.UserName:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-person-badge"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
          </svg>
        );
      case SvgIconType.Position:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-shield-shaded"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"
            />
            <path d="M8 2.25c.909 0 3.188.685 4.254 1.022a.94.94 0 0 1 .656.773c.814 6.424-4.13 9.452-4.91 9.452V2.25z" />
          </svg>
        );
      case SvgIconType.Location:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-map"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"
            />
          </svg>
        );
      case SvgIconType.Org:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-inboxes-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1-.78.624l-3.7-4.624A.5.5 0 0 0 11.02 1H4.98a.5.5 0 0 0-.39.188L.89 5.812a.5.5 0 1 1-.78-.624L3.81.563z"
            />
            <path
              fillRule="evenodd"
              d="M.125 5.17A.5.5 0 0 1 .5 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .121-.393z"
            />
          </svg>
        );
      case SvgIconType.Race:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-globe"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.018 7.5h2.49c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5zM2.255 4H4.09a9.266 9.266 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.024 7.024 0 0 0 2.255 4zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm-.5 1.077c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V1.077zM7.5 5H4.847a12.5 12.5 0 0 0-.338 2.5H7.5V5zm1 2.5V5h2.653c.187.765.306 1.608.338 2.5H8.5zm-1 1H4.51a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm1 2.5V8.5h2.99a12.495 12.495 0 0 1-.337 2.5H8.5zm-1 1H5.145c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12zm-2.173 2.472a6.695 6.695 0 0 1-.597-.933A9.267 9.267 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM1.674 11H3.82a13.651 13.651 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm8.999 3.472A7.024 7.024 0 0 0 13.745 12h-1.834a9.278 9.278 0 0 1-.641 1.539 6.688 6.688 0 0 1-.597.933zM10.855 12H8.5v2.923c.67-.204 1.335-.82 1.887-1.855A7.98 7.98 0 0 0 10.855 12zm1.325-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm.312-3.5h2.49a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.91 4a9.277 9.277 0 0 0-.64-1.539 6.692 6.692 0 0 0-.597-.933A7.024 7.024 0 0 1 13.745 4h-1.834zm-1.055 0H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z"
            />
          </svg>
        );
      case SvgIconType.Disposition:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-flag-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 0 0 .593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 0 1 9 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916A.5.5 0 0 1 3.5 9V3a.5.5 0 0 1 .223-.416l.04-.026z"
            />
          </svg>
        );
      case SvgIconType.Stats:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-card-list"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
            />
            <path
              fillRule="evenodd"
              d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
            />
            <circle cx="3.5" cy="5.5" r=".5" />
            <circle cx="3.5" cy="8" r=".5" />
            <circle cx="3.5" cy="10.5" r=".5" />
          </svg>
        );
      case SvgIconType.Relationship:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-diagram-3-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"
            />
          </svg>
        );
      case SvgIconType.Alive:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-heart-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        );
      case SvgIconType.Cross:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-x-circle-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"
            />
          </svg>
        );
      case SvgIconType.Check:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-check-circle-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
        );
      case SvgIconType.Notes:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-book"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
            />
          </svg>
        );
      case SvgIconType.DMNotes:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-book-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
            />
          </svg>
        );
      case SvgIconType.Add:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-plus-circle"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        );
      case SvgIconType.Share:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-box-arrow-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
            />
            <path
              fillRule="evenodd"
              d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>
        );
      case SvgIconType.Dices:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-dice-5-fill"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            />
          </svg>
        );
      case SvgIconType.Email:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
          </svg>
        );
      case SvgIconType.PassKey:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-key-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
        );

      case SvgIconType.Robot:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-puzzle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3.112 3.645A1.5 1.5 0 0 1 4.605 2H7a.5.5 0 0 1 .5.5v.382c0 .696-.497 1.182-.872 1.469a.459.459 0 0 0-.115.118.113.113 0 0 0-.012.025L6.5 4.5v.003l.003.01c.004.01.014.028.036.053a.86.86 0 0 0 .27.194C7.09 4.9 7.51 5 8 5c.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.213.213 0 0 0 .036-.054l.003-.01v-.008a.112.112 0 0 0-.012-.025.459.459 0 0 0-.115-.118c-.375-.287-.872-.773-.872-1.469V2.5A.5.5 0 0 1 9 2h2.395a1.5 1.5 0 0 1 1.493 1.645L12.645 6.5h.237c.195 0 .42-.147.675-.48.21-.274.528-.52.943-.52.568 0 .947.447 1.154.862C15.877 6.807 16 7.387 16 8s-.123 1.193-.346 1.638c-.207.415-.586.862-1.154.862-.415 0-.733-.246-.943-.52-.255-.333-.48-.48-.675-.48h-.237l.243 2.855A1.5 1.5 0 0 1 11.395 14H9a.5.5 0 0 1-.5-.5v-.382c0-.696.497-1.182.872-1.469a.459.459 0 0 0 .115-.118.113.113 0 0 0 .012-.025L9.5 11.5v-.003l-.003-.01a.214.214 0 0 0-.036-.053.859.859 0 0 0-.27-.194C8.91 11.1 8.49 11 8 11c-.491 0-.912.1-1.19.24a.859.859 0 0 0-.271.194.214.214 0 0 0-.036.054l-.003.01v.002l.001.006a.113.113 0 0 0 .012.025c.016.027.05.068.115.118.375.287.872.773.872 1.469v.382a.5.5 0 0 1-.5.5H4.605a1.5 1.5 0 0 1-1.493-1.645L3.356 9.5h-.238c-.195 0-.42.147-.675.48-.21.274-.528.52-.943.52-.568 0-.947-.447-1.154-.862C.123 9.193 0 8.613 0 8s.123-1.193.346-1.638C.553 5.947.932 5.5 1.5 5.5c.415 0 .733.246.943.52.255.333.48.48.675.48h.238l-.244-2.855z" />
          </svg>
        );

      case SvgIconType.Question:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={this.props.color}
            className="bi bi-question-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
          </svg>
        );
      default:
        return (
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-app"
            fill={this.props.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M11 2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"
            />
          </svg>
        );
    }
  }
}

SvgIcon.defaultProps = {
  color: "#FFFFFF",
};

export default SvgIcon;

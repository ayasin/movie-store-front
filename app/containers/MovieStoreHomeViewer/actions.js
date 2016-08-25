import {
  DEFAULT_ACTION,
  NEW_GRADES_ARRIVED,
  GET_STUDENT_GRADES_FOR_SECTION,
  TOGGLE_ACCORDION_AT_PATH,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function newGradesArrived(grades) {
  return {
    type: NEW_GRADES_ARRIVED,
    grades,
  };
}

export function getStudentGradesForSection() {
  return {
    type: GET_STUDENT_GRADES_FOR_SECTION,
  };
}

export function toggleAccordionAtPath(path) {
  return {
    type: TOGGLE_ACCORDION_AT_PATH,
    path,
  };
}

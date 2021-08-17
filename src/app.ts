/// <reference path="modal/drag-drop.ts" />
/// <reference path="modal/project.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="utils/validation.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="components/project-item.ts"/>
/// <reference path="components/project-list.ts"/>
/// <reference path="components/project-input.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}

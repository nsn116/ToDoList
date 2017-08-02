System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TextBoxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TextBoxComponent = (function () {
                function TextBoxComponent() {
                    this.index = 0;
                    this.notesArray = [];
                    this.newNote = "";
                }
                TextBoxComponent = __decorate([
                    core_1.Component({
                        selector: 'textBox',
                        template: "<textarea id=\"box\" maxlength=\"100\" style=\"width: 25ch; height: 10ch;\" \n                         placeholder=\"What do you want to do ?\" [(ngModel)]=\"newNote\"></textarea>\n                <button *ngIf=\"newNote.length > 0\" (click)=\"addToNotes()\">Add Note</button>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TextBoxComponent);
                return TextBoxComponent;
            }());
            exports_1("TextBoxComponent", TextBoxComponent);
        }
    }
});
//# sourceMappingURL=textBox.component.js.map
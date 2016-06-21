System.register(['angular2/core'], function(exports_1, context_1) {
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
    var starComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            starComponent = (function () {
                function starComponent() {
                    this.ratingClicked = new core_1.EventEmitter();
                }
                starComponent.prototype.ngOnchanges = function () {
                    this;
                    starWidth = this.rating * 86 / 5;
                };
                starComponent.prototype.onClick = function () {
                    this.ratingClicked.emit("The rating " + this.rating + " was clicked!");
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], starComponent.prototype, "rating", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], starComponent.prototype, "ratingClicked", void 0);
                starComponent = __decorate([
                    core_1.Component({
                        selector: 'ai-star',
                        templateUrl: 'app/shared/star.component.html',
                        styleUrl: ['app/shared/star.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], starComponent);
                return starComponent;
            }());
            exports_1("starComponent", starComponent);
        }
    }
});
//# sourceMappingURL=star.component.js.map
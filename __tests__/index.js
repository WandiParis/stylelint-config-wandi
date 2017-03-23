const config = require("../");
const stylelint = require("stylelint");

const validCSS = `
/* Colors */

.foo1 {
    color: #000;
    background-color: #abcdef;
}

/* Font family */

.foo2 {
    font-family: Arial, "Times New Roman", serif;
}

/* Function */

.foo3 {
    width: calc(100% + 10px);
    transform: translate(50%, 50%) scale(2);
    background-image: linear-gradient(to right, #fff 0%, #000 100%);
}

.foo4 {
    background-image: url("thing.jpg");
}

/* Number */

.foo5 {
    transform: scale(0.5);
    width: 33.333333%;
    height: 100px;
}

/* String */

.foo6 {
    content: "bar";
}

/* Length */

.foo7 {
    width: 0;
}

/* Time */

.foo8 {
    transition: all 0.5s;
}

/* Unit */

.foo9 {
    width: 34rem;
}

/* Value */

.foo10 {
    font-weight: bold;
}

/* Value list */

.foo11 {
    font-family: Arial, Verdana, sans-serif;
}

/* Shorthand property */

.foo12 {
    padding: 10px 11px 12px 13px;
}

/* Property */

.foo13 {
    font-size: 1rem;
}

/* Declaration */

.foo14 {
    display: block !important;
}

/* Declaration block */

.foo15 {
    width: 100%;
}

/* Block */

.foo16 {
    display: block;
}

/* Selector */

.foo17[type="button"] {
    display: block;
}

input[type="text"] {
    color: red;
}

.foo18 + .foo19 {
    display: block;
}

.foo20:hover {
    background-color: #f00;
}

.foo21:not(:focus) {
    background-color: #000;
}

.foo22::before {
    content: "bar";
}

button {
    display: inline-block;
}

/* Selector list */

.foo23,
.foo24,
.foo25 {
    display: block;
}

/* Root rule */

:root {
    --my-var: 20px;
}

/* Rule */

.foo26 {
    &:hover {
        border: 1px solid black;
    }
}

/* Media feature */

@media (max-width: 600px) {
    .foo27 {
        display: block;
    }
}

@media (max-width >= 600px) {
    .foo28 {
        display: block;
    }
}

/* At rule */

@import "thing.css";

/* Disabled because ... */
/* stylelint-disable */

.foo29 {
    wIdTh: 100xp;
}

/* stylelint-enable */

/* Comment */

/* Man, ALL comments should look like this one ! */

`;

const invalidCSS = `
/* Color */

.foo1 {
    color: #FF0000;
    background-color: #XZIJFG;
}

/* Font family */

.foo2 {
    font-family: Times New Roman, Verdana, sans-serif, Verdana;
}

/* Function */

.foo3 {
    width: calc(100%+10px);
    transform: TRANSLATE(50%,50%)scale(2);
    background-image: linear-gradient(top, #000 0%, #fff 100%);
}

.foo4 {
    background-image: url(thing.jpg);
}

/* Number */

.foo5 {
    line-height: .5;
    width: 33.3333333333%;
    height: 100.0px;
}

/* String */

.foo6 {
    content: '
    bar';
}

/* Length */

.foo7 {
    width: 0px;
}

/* Time */

.foo8 {
    transition: all 50ms;
}

/* Unit */

.foo9 {
    width: 100PX;
    height: 100xp;
}

/* Value */

.foo10 {
    display: BLOCK;
    transform: -moz-translate(50%, 50%);
}

/* Value list */

.foo11 {
    font-family: Arial,Verdana,sans-serif;
}

/* Shorthand property */

.foo12 {
    padding: 10px 10px 10px 10px;
}

/* Property */

.foo13 {
    DISPLAY: block;
    -moz-transform: translate(50%, 50%);
}

/* Declaration */

.foo14 {
    display :block! important;
}

/* Declaration block */

.foo15 {
    display: block;
    display: inline;
    margin: 10px;margin: 15px ;
    color: #000
}

/* Block */

.foo16{
    display: block;} .foo17
{

}

.foo18 { display: block; }

/* Selector */

.foo19[ type = button ] {
    display: block;
}

input[type="text"] {
    color: red;
}

.foo20+.foo21+.foo22+.foo23+.foo24 {
    display: block;
}

#the-id {
    display: block;
}

a.foo25 {
    display: block;
}

.foo26:HOVER {
    display: block;
}

.foo27:BEFORE {
    display: block;
}

BUTTON {
    display: block;
}

/* Selector list */

.foo28,.foo29,.foo30 {
    display: block;
}

/* Root rule */

:root {
    font-size: 14px;
}

/* Rule */

.foo31 {

    &:hover {
        display: block;
    }
}

/* Media feature */

/* Media feature */

@media ( max-width :600px ) {

    .foo32 {
        display: block;
    }

}

@media ( max-width 600px ) {
    .foo33 {
        display: block;
    }
}
`;

describe("flags no warning and no error with valid CSS", () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: validCSS,
            config,
        });
    });

    it("did not error", () => {
        return result.then(data => expect(data.errored).toBeFalsy());
    });

    it("flags no warning", () => {
        return result.then(data => expect(data.results[0].warnings.length).toBe(0));
    });
});

describe("flags warnings and errors with invalid CSS", () => {
    let result;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidCSS,
            config,
        });
    });

    it("did error", () => {
        return result.then(data => expect(data.errored).toBeTruthy());
    });

    it("flags warnings", () => {
        return result.then(data => expect(data.results[0].warnings.length).toBeGreaterThan(0));
    });
});

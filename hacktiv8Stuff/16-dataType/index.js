let kata = "true";

if (typeof kata === "boolean") {
    kata ? console.log("thank you for agreeing") : console.log("cannot proceed without agreement");
} else if (!kata) {
    console.log("Invalid Data");
} else if (typeof kata === "string") {
    console.log("username " + kata);
} else if (typeof kata === "number") {
    console.log("age " + kata);
}

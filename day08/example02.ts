let pets = new Set(["Cat","Dog","Dolphin"]);
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet);
}

for (let pet of pets ){
    console.log(pet);
}


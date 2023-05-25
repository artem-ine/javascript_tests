const arn = "CCUCGCCGGUACUUCUCG";
let acidesAmines = "";

// go through ADN 3 letters at a time
for (let i = 0; i < arn.length; i += 3) {
  const codon = arn.substring(i, i + 3);

  // translate the 3 letters
  let acideAmine = "";
  switch (codon) {
    case "UCU":
    case "UCC":
    case "UCA":
    case "UCG":
    case "AGU":
    case "AGC":
      acideAmine = "Sérine";
      break;
    case "CCU":
    case "CCC":
    case "CCA":
    case "CCG":
      acideAmine = "Proline";
      break;
    case "UUA":
    case "UUG":
      acideAmine = "Leucine";
      break;
    case "UUU":
    case "UUC":
      acideAmine = "Phénylalanine";
      break;
    case "CGU":
    case "CGC":
    case "CGA":
    case "CGG":
    case "AGA":
    case "AGG":
      acideAmine = "Arginine";
      break;
    case "UAU":
    case "UAC":
      acideAmine = "Tyrosine";
      break;
    default:
      acideAmine = "Acide aminé inconnu";
  }

  // add it to the string
  acidesAmines += acideAmine + "-";
}

// remove the last hyphen
acidesAmines = acidesAmines.slice(0, -1);

console.log(acidesAmines);

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _pokedexNumber, _type, _signatureMove, _region) {
   const NFT = {
      "name": _name,
      "pokedexNumber": _pokedexNumber,
      "type": _type,
      "signatureMove": _signatureMove,
      "region": _region
   }
   NFTs.push(NFT);
   console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   console.log("\nPokémon NFT Collection");
   console.log('------------------------------');
   for(let i = 0; i < NFTs.length; i++) {
      console.log("ID:             " + (i + 1))
      console.log("Name:           " + NFTs[i].name);
      console.log("Pokédex Number: " + NFTs[i].pokedexNumber);
      console.log("Type:           " + NFTs[i].type);
      console.log("Signature Move: " + NFTs[i].signatureMove);
      console.log("Region:         " + NFTs[i].region);
      console.log('------------------------------');
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nTotal Number of NFTs: " + NFTs.length);
}

// call your functions below this line
mintNFT("Pikachu", "#025", "Electric", "Thunderbolt", "Kanto");
mintNFT("Charizard", "#006", "Fire/Flying", "Blast Burn", "Kanto");
mintNFT("Mewtwo", "#150", "Psychic", "Psystrike", "Kanto");
mintNFT("Rayquaza", "#384", "Dragon/Flying", "Dragon Ascent", "Hoenn");
mintNFT("Greninja", "#658", "Water/Dark", "Water Shuriken", "Kalos");
listNFTs();
getTotalSupply();

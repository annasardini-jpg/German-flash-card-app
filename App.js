// Comprehensive A1+ vocabulary based on Begegnungen A1+
  const sampleDictionary = [
    // Personal information & Family
    { id: 1, german: 'ich', english: 'I', article: null, plural: null, type: 'pronoun' },
    { id: 2, german: 'du', english: 'you (informal)', article: null, plural: null, type: 'pronoun' },
    { id: 3, german: 'er', english: 'he', article: null, plural: null, type: 'pronoun' },
    { id: 4, german: 'sie', english: 'she/they', article: null, plural: null, type: 'pronoun' },
    { id: 5, german: 'wir', english: 'we', article: null, plural: null, type: 'pronoun' },
    { id: 6, german: 'der Name', english: 'name', article: 'der', plural: 'die Namen', type: 'noun' },
    { id: 7, german: 'die Familie', english: 'family', article: 'die', plural: 'die Familien', type: 'noun' },
    { id: 8, german: 'die Mutter', english: 'mother', article: 'die', plural: 'die Mütter', type: 'noun' },
    { id: 9, german: 'der Vater', english: 'father', article: 'der', plural: 'die Väter', type: 'noun' },
    { id: 10, german: 'das Kind', english: 'child', article: 'das', plural: 'die Kinder', type: 'noun' },
    { id: 11, german: 'der Sohn', english: 'son', article: 'der', plural: 'die Söhne', type: 'noun' },
    { id: 12, german: 'die Tochter', english: 'daughter', article: 'die', plural: 'die Töchter', type: 'noun' },
    { id: 13, german: 'die Schwester', english: 'sister', article: 'die', plural: 'die Schwestern', type: 'noun' },
    { id: 14, german: 'der Bruder', english: 'brother', article: 'der', plural: 'die Brüder', type: 'noun' },
    { id: 15, german: 'die Großmutter', english: 'grandmother', article: 'die', plural: 'die Großmütter', type: 'noun' },
    { id: 16, german: 'der Großvater', english: 'grandfather', article: 'der', plural: 'die Großväter', type: 'noun' },
    { id: 17, german: 'die Frau', english: 'woman/wife', article: 'die', plural: 'die Frauen', type: 'noun' },
    { id: 18, german: 'der Mann', english: 'man/husband', article: 'der', plural: 'die Männer', type: 'noun' },

    // Housing & Living
    { id: 19, german: 'das Haus', english: 'house', article: 'das', plural: 'die Häuser', type: 'noun' },
    { id: 20, german: 'die Wohnung', english: 'apartment', article: 'die', plural: 'die Wohnungen', type: 'noun' },
    { id: 21, german: 'das Zimmer', english: 'room', article: 'das', plural: 'die Zimmer', type: 'noun' },
    { id: 22, german: 'die Küche', english: 'kitchen', article: 'die', plural: 'die Küchen', type: 'noun' },
    { id: 23, german: 'das Badezimmer', english: 'bathroom', article: 'das', plural: 'die Badezimmer', type: 'noun' },
    { id: 24, german: 'das Schlafzimmer', english: 'bedroom', article: 'das', plural: 'die Schlafzimmer', type: 'noun' },
    { id: 25, german: 'das Wohnzimmer', english: 'living room', article: 'das', plural: 'die Wohnzimmer', type: 'noun' },
    { id: 26, german: 'der Balkon', english: 'balcony', article: 'der', plural: 'die Balkone', type: 'noun' },
    { id: 27, german: 'der Garten', english: 'garden', article: 'der', plural: 'die Gärten', type: 'noun' },
    { id: 28, german: 'die Tür', english: 'door', article: 'die', plural: 'die Türen', type: 'noun' },
    { id: 29, german: 'das Fenster', english: 'window', article: 'das', plural: 'die Fenster', type: 'noun' },

    // Furniture & Objects
    { id: 30, german: 'der Tisch', english: 'table', article: 'der', plural: 'die Tische', type: 'noun' },
    { id: 31, german: 'der Stuhl', english: 'chair', article: 'der', plural: 'die Stühle', type: 'noun' },
    { id: 32, german: 'das Bett', english: 'bed', article: 'das', plural: 'die Betten', type: 'noun' },
    { id: 33, german: 'der Schrank', english: 'wardrobe/cupboard', article: 'der', plural: 'die Schränke', type: 'noun' },
    { id: 34, german: 'der Kühlschrank', english: 'refrigerator', article: 'der', plural: 'die Kühlschränke', type: 'noun' },
    { id: 35, german: 'das Sofa', english: 'sofa', article: 'das', plural: 'die Sofas', type: 'noun' },
    { id: 36, german: 'der Fernseher', english: 'television', article: 'der', plural: 'die Fernseher', type: 'noun' },
    { id: 37, german: 'das Telefon', english: 'telephone', article: 'das', plural: 'die Telefone', type: 'noun' },
    { id: 38, german: 'der Computer', english: 'computer', article: 'der', plural: 'die Computer', type: 'noun' },

    // Food & Drinks
    { id: 39, german: 'das Essen', english: 'food/meal', article: 'das', plural: 'die Essen', type: 'noun' },
    { id: 40, german: 'das Frühstück', english: 'breakfast', article: 'das', plural: 'die Frühstücke', type: 'noun' },
    { id: 41, german: 'das Mittagessen', english: 'lunch', article: 'das', plural: 'die Mittagessen', type: 'noun' },
    { id: 42, german: 'das Abendessen', english: 'dinner', article: 'das', plural: 'die Abendessen', type: 'noun' },
    { id: 43, german: 'das Brot', english: 'bread', article: 'das', plural: 'die Brote', type: 'noun' },
    { id: 44, german: 'das Brötchen', english: 'bread roll', article: 'das', plural: 'die Brötchen', type: 'noun' },
    { id: 45, german: 'die Butter', english: 'butter', article: 'die', plural: null, type: 'noun' },
    { id: 46, german: 'die Marmelade', english: 'jam', article: 'die', plural: 'die Marmeladen', type: 'noun' },
    { id: 47, german: 'der Käse', english: 'cheese', article: 'der', plural: 'die Käse', type: 'noun' },
    { id: 48, german: 'die Wurst', english: 'sausage', article: 'die', plural: 'die Würste', type: 'noun' },
    { id: 49, german: 'das Fleisch', english: 'meat', article: 'das', plural: null, type: 'noun' },
    { id: 50, german: 'der Fisch', english: 'fish', article: 'der', plural: 'die Fische', type: 'noun' },
    { id: 51, german: 'das Gemüse', english: 'vegetables', article: 'das', plural: null, type: 'noun' },
    { id: 52, german: 'das Obst', english: 'fruit', article: 'das', plural: null, type: 'noun' },
    { id: 53, german: 'der Apfel', english: 'apple', article: 'der', plural: 'die Äpfel', type: 'noun' },
    { id: 54, german: 'die Banane', english: 'banana', article: 'die', plural: 'die Bananen', type: 'noun' },
    { id: 55, german: 'die Orange', english: 'orange', article: 'die', plural: 'die Orangen', type: 'noun' },
    { id: 56, german: 'die Kartoffel', english: 'potato', article: 'die', plural: 'die Kartoffeln', type: 'noun' },
    { id: 57, german: 'die Tomate', english: 'tomato', article: 'die', plural: 'die Tomaten', type: 'noun' },
    { id: 58, german: 'der Salat', english: 'salad/lettuce', article: 'der', plural: 'die Salate', type: 'noun' },
    { id: 59, german: 'das Ei', english: 'egg', article: 'das', plural: 'die Eier', type: 'noun' },
    { id: 60, german: 'der Zucker', english: 'sugar', article: 'der', plural: null, type: 'noun' },
    { id: 61, german: 'das Salz', english: 'salt', article: 'das', plural: null, type: 'noun' },
    { id: 62, german: 'das Wasser', english: 'water', article: 'das', plural: null, type: 'noun' },
    { id: 63, german: 'der Kaffee', english: 'coffee', article: 'der', plural: 'die Kaffees', type: 'noun' },
    { id: 64, german: 'der Tee', english: 'tea', article: 'der', plural: 'die Tees', type: 'noun' },
    { id: 65, german: 'die Milch', english: 'milk', article: 'die', plural: null, type: 'noun' },
    { id: 66, german: 'der Saft', english: 'juice', article: 'der', plural: 'die Säfte', type: 'noun' },
    { id: 67, german: 'das Bier', english: 'beer', article: 'das', plural: 'die Biere', type: 'noun' },
    { id: 68, german: 'der Wein', english: 'wine', article: 'der', plural: 'die Weine', type: 'noun' },

    // Verbs - Daily Activities
    { id: 69, german: 'sein', english: 'to be', article: null, plural: null, type: 'verb' },
    { id: 70, german: 'haben', english: 'to have', article: null, plural: null, type: 'verb' },
    { id: 71, german: 'werden', english: 'to become', article: null, plural: null, type: 'verb' },
    { id: 72, german: 'gehen', english: 'to go', article: null, plural: null, type: 'verb' },
    { id: 73, german: 'kommen', english: 'to come', article: null, plural: null, type: 'verb' },
    { id: 74, german: 'machen', english: 'to make/do', article: null, plural: null, type: 'verb' },
    { id: 75, german: 'sehen', english: 'to see', article: null, plural: null, type: 'verb' },
    { id: 76, german: 'wissen', english: 'to know (facts)', article: null, plural: null, type: 'verb' },
    { id: 77, german: 'kennen', english: 'to know (people/places)', article: null, plural: null, type: 'verb' },
    { id: 78, german: 'sprechen', english: 'to speak', article: null, plural: null, type: 'verb' },
    { id: 79, german: 'sagen', english: 'to say', article: null, plural: null, type: 'verb' },
    { id: 80, german: 'hören', english: 'to hear', article: null, plural: null, type: 'verb' },
    { id: 81, german: 'lesen', english: 'to read', article: null, plural: null, type: 'verb' },
    { id: 82, german: 'schreiben', english: 'to write', article: null, plural: null, type: 'verb' },
    { id: 83, german: 'essen', english: 'to eat', article: null, plural: null, type: 'verb' },
    { id: 84, german: 'trinken', english: 'to drink', article: null, plural: null, type: 'verb' },
    { id: 85, german: 'schlafen', english: 'to sleep', article: null, plural: null, type: 'verb' },
    { id: 86, german: 'arbeiten', english: 'to work', article: null, plural: null, type: 'verb' },
    { id: 87, german: 'lernen', english: 'to learn', article: null, plural: null, type: 'verb' },
    { id: 88, german: 'studieren', english: 'to study (university)', article: null, plural: null, type: 'verb' },
    { id: 89, german: 'wohnen', english: 'to live (reside)', article: null, plural: null, type: 'verb' },
    { id: 90, german: 'leben', english: 'to live (exist)', article: null, plural: null, type: 'verb' },
    { id: 91, german: 'fahren', english: 'to drive/ride', article: null, plural: null, type: 'verb' },
    { id: 92, german: 'fliegen', english: 'to fly', article: null, plural: null, type: 'verb' },
    { id: 93, german: 'kaufen', english: 'to buy', article: null, plural: null, type: 'verb' },
    { id: 94, german: 'verkaufen', english: 'to sell', article: null, plural: null, type: 'verb' },
    { id: 95, german: 'bezahlen', english: 'to pay', article: null, plural: null, type: 'verb' },
    { id: 96, german: 'kosten', english: 'to cost', article: null, plural: null, type: 'verb' },
    { id: 97, german: 'fragen', english: 'to ask', article: null, plural: null, type: 'verb' },
    { id: 98, german: 'antworten', english: 'to answer', article: null, plural: null, type: 'verb' },
    { id: 99, german: 'helfen', english: 'to help', article: null, plural: null, type: 'verb' },
    { id: 100, german: 'besuchen', english: 'to visit', article: null, plural: null, type: 'verb' },

    // Time & Numbers
    { id: 101, german: 'die Zeit', english: 'time', article: 'die', plural: 'die Zeiten', type: 'noun' },
    { id: 102, german: 'die Uhr', english: 'clock/watch', article: 'die', plural: 'die Uhren', type: 'noun' },
    { id: 103, german: 'der Tag', english: 'day', article: 'der', plural: 'die Tage', type: 'noun' },
    { id: 104, german: 'die Woche', english: 'week', article: 'die', plural: 'die Wochen', type: 'noun' },
    { id: 105, german: 'der Monat', english: 'month', article: 'der', plural: 'die Monate', type: 'noun' },
    { id: 106, german: 'das Jahr', english: 'year', article: 'das', plural: 'die Jahre', type: 'noun' },
    { id: 107, german: 'heute', english: 'today', article: null, plural: null, type: 'adverb' },
    { id: 108, german: 'gestern', english: 'yesterday', article: null, plural: null, type: 'adverb' },
    { id: 109, german: 'morgen', english: 'tomorrow', article: null, plural: null, type: 'adverb' },
    { id: 110, german: 'jetzt', english: 'now', article: null, plural: null, type: 'adverb' },
    { id: 111, german: 'dann', english: 'then', article: null, plural: null, type: 'adverb' },
    { id: 112, german: 'später', english: 'later', article: null, plural: null, type: 'adverb' },
    { id: 113, german: 'früh', english: 'early', article: null, plural: null, type: 'adjective' },
    { id: 114, german: 'spät', english: 'late', article: null, plural: null, type: 'adjective' },
    { id: 115, german: 'der Morgen', english: 'morning', article: 'der', plural: 'die Morgen', type: 'noun' },
    { id: 116, german: 'der Mittag', english: 'noon', article: 'der', plural: 'die Mittage', type: 'noun' },
    { id: 117, german: 'der Abend', english: 'evening', article: 'der', plural: 'die Abende', type: 'noun' },
    { id: 118, german: 'die Nacht', english: 'night', article: 'die', plural: 'die Nächte', type: 'noun' },

    // Days of the Week
    { id: 119, german: 'der Montag', english: 'Monday', article: 'der', plural: 'die Montage', type: 'noun' },
    { id: 120, german: 'der Dienstag', english: 'Tuesday', article: 'der', plural: 'die Dienstage', type: 'noun' },
    { id: 121, german: 'der Mittwoch', english: 'Wednesday', article: 'der', plural: 'die Mittwoche', type: 'noun' },
    { id: 122, german: 'der Donnerstag', english: 'Thursday', article: 'der', plural: 'die Donnerstage', type: 'noun' },
    { id: 123, german: 'der Freitag', english: 'Friday', article: 'der', plural: 'die Freitage', type: 'noun' },
    { id: 124, german: 'der Samstag', english: 'Saturday', article: 'der', plural: 'die Samstage', type: 'noun' },
    { id: 125, german: 'der Sonntag', english: 'Sunday', article: 'der', plural: 'die Sonntage', type: 'noun' },

    // Months
    { id: 126, german: 'der Januar', english: 'January', article: 'der', plural: null, type: 'noun' },
    { id: 127, german: 'der Februar', english: 'February', article: 'der', plural: null, type: 'noun' },
    { id: 128, german: 'der März', english: 'March', article: 'der', plural: null, type: 'noun' },
    { id: 129, german: 'der April', english: 'April', article: 'der', plural: null, type: 'noun' },
    { id: 130, german: 'der Mai', english: 'May', article: 'der', plural: null, type: 'noun' },
    { id: 131, german: 'der Juni', english: 'June', article: 'der', plural: null, type: 'noun' },
    { id: 132, german: 'der Juli', english: 'July', article: 'der', plural: null, type: 'noun' },
    { id: 133, german: 'der August', english: 'August', article: 'der', plural: null, type: 'noun' },
    { id: 134, german: 'der September', english: 'September', article: 'der', plural: null, type: 'noun' },
    { id: 135, german: 'der Oktober', english: 'October', article: 'der', plural: null, type: 'noun' },
    { id: 136, german: 'der November', english: 'November', article: 'der', plural: null, type: 'noun' },
    { id: 137, german: 'der Dezember', english: 'December', article: 'der', plural: null, type: 'noun' },

    // Numbers (1-20)
    { id: 138, german: 'eins', english: 'one', article: null, plural: null, type: 'number' },
    { id: 139, german: 'zwei', english: 'two', article: null, plural: null, type: 'number' },
    { id: 140, german: 'drei', english: 'three', article: null, plural: null, type: 'number' },
    { id: 141, german: 'vier', english: 'four', article: null, plural: null, type: 'number' },
    { id: 142, german: 'fünf', english: 'five', article: null, plural: null, type: 'number' },
    { id: 143, german: 'sechs', english: 'six', article: null, plural: null, type: 'number' },
    { id: 144, german: 'sieben', english: 'seven', article: null, plural: null, type: 'number' },
    { id: 145, german: 'acht', english: 'eight', article: null, plural: null, type: 'number' },
    { id: 146, german: 'neun', english: 'nine', article: null, plural: null, type: 'number' },
    { id: 147, german: 'zehn', english: 'ten', article: null, plural: null, type: 'number' },
    { id: 148, german: 'elf', english: 'eleven', article: null, plural: null, type: 'number' },
    { id: 149, german: 'zwölf', english: 'twelve', article: null, plural: null, type: 'number' },
    { id: 150, german: 'zwanzig', english: 'twenty', article: null, plural: null, type: 'number' },
    { id: 151, german: 'hundert', english: 'hundred', article: null, plural: null, type: 'number' },
    { id: 152, german: 'tausend', english: 'thousand', article: null, plural: null, type: 'number' },

    // Clothing
    { id: 153, german: 'die Kleidung', english: 'clothing', article: 'die', plural: null, type: 'noun' },
    { id: 154, german: 'das Hemd', english: 'shirt', article: 'das', plural: 'die Hemden', type: 'noun' },
    { id: 155, german: 'die Hose', english: 'pants/trousers', article: 'die', plural: 'die Hosen', type: 'noun' },
    { id: 156, german: 'das Kleid', english: 'dress', article: 'das', plural: 'die Kleider', type: 'noun' },
    { id: 157, german: 'der Rock', english: 'skirt', article: 'der', plural: 'die Röcke', type: 'noun' },
    { id: 158, german: 'die Jacke', english: 'jacket', article: 'die', plural: 'die Jacken', type: 'noun' },
    { id: 159, german: 'der Mantel', english: 'coat', article: 'der', plural: 'die Mäntel', type: 'noun' },
    { id: 160, german: 'der Schuh', english: 'shoe', article: 'der', plural: 'die Schuhe', type: 'noun' },
    { id: 161, german: 'die Socke', english: 'sock', article: 'die', plural: 'die Socken', type: 'noun' },
    { id: 162, german: 'der Hut', english: 'hat', article: 'der', plural: 'die Hüte', type: 'noun' },

    // Colors
    { id: 163, german: 'die Farbe', english: 'color', article: 'die', plural: 'die Farben', type: 'noun' },
    { id: 164, german: 'rot', english: 'red', article: null, plural: null, type: 'adjective' },
    { id: 165, german: 'blau', english: 'blue', article: null, plural: null, type: 'adjective' },
    { id: 166, german: 'grün', english: 'green', article: null, plural: null, type: 'adjective' },
    { id: 167, german: 'gelb', english: 'yellow', article: null, plural: null, type: 'adjective' },
    { id: 168, german: 'schwarz', english: 'black', article: null, plural: null, type: 'adjective' },
    { id: 169, german: 'weiß', english: 'white', article: null, plural: null, type: 'adjective' },
    { id: 170, german: 'braun', english: 'brown', article: null, plural: null, type: 'adjective' },

    // Adjectives - Descriptions
    { id: 171, german: 'gut', english: 'good', article: null, plural: null, type: 'adjective' },
    { id: 172, german: 'schlecht', english: 'bad', article: null, plural: null, type: 'adjective' },
    { id: 173, german: 'groß', english: 'big/tall', article: null, plural: null, type: 'adjective' },
    { id: 174, german: 'klein', english: 'small', article: null, plural: null, type: 'adjective' },
    { id: 175, german: 'neu', english: 'new', article: null, plural: null, type: 'adjective' },
    { id: 176, german: 'alt', english: 'old', article: null, plural: null, type: 'adjective' },
    { id: 177, german: 'jung', english: 'young', article: null, plural: null, type: 'adjective' },
    { id: 178, german: 'schön', english: 'beautiful', article: null, plural: null, type: 'adjective' },
    { id: 179, german: 'hässlich', english: 'ugly', article: null, plural: null, type: 'adjective' },
    { id: 180, german: 'interessant', english: 'interesting', article: null, plural: null, type: 'adjective' },
    { id: 181, german: 'langweilig', english: 'boring', article: null, plural: null, type: 'adjective' },
    { id: 182, german: 'schwer', english: 'difficult/heavy', article: null, plural: null, type: 'adjective' },
    { id: 183, german: 'leicht', english: 'easy/light', article: null, plural: null, type: 'adjective' },
    { id: 184, german: 'schnell', english: 'fast', article: null, plural: null, type: 'adjective' },
    { id: 185, german: 'langsam', english: 'slow', article: null, plural: null, type: 'adjective' },
    { id: 186, german: 'warm', english: 'warm', article: null, plural: null, type: 'adjective' },
    { id: 187, german: 'kalt', english: 'cold', article: null, plural: null, type: 'adjective' },
    { id: 188, german: 'heiß', english: 'hot', article: null, plural: null, type: 'adjective' },
    { id: 189, german: 'müde', english: 'tired', article: null, plural: null, type: 'adjective' },
    { id: 190, german: 'krank', english: 'sick', article: null, plural: null, type: 'adjective' },
    { id: 191, german: 'gesund', english: 'healthy', article: null, plural: null, type: 'adjective' },

    // Transport & Travel
    { id: 192, german: 'das Auto', english: 'car', article: 'das', plural: 'die Autos', type: 'noun' },
    { id: 193, german: 'der Bus', english: 'bus', article: 'der', plural: 'die Busse', type: 'noun' },
    { id: 194, german: 'die Bahn', english: 'train', article: 'die', plural: 'die Bahnen', type: 'noun' },  // Search function using DWDS API
  const performSearch = async (term) => {
    currentSearchTerm.current = term;
    
    if (!term.trim()) {
      renderSearchResults([]);
      return;
    }

    renderSearchResults([], true); // Show loading

    try {
      let results = [];
      
      console.log(`Searching DWDS for: "${term}"`);
      
      // Use DWDS API for German dictionary lookups
      try {
        const dwdsUrl = `https://www.dwds.de/api/lemma/${encodeURIComponent(term)}`;
        console.log('Trying DWDS API:', dwdsUrl);
        
        const response = await fetch(dwdsUrl, {
          headers: {
            'Accept': 'application/json'
          }
        });
        
        console.log('DWDS response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('DWDS data:', data);
          
          if (data && data.lemma) {
            // Extract word information from DWDS response
            const lemma = data.lemma;
            const definition = data.definition || data.sense?.[0]?.definition || '';
            const pos = data.pos || data.wordClass || '';
            
            results.push({
              id: Date.now(),
              german: lemma,
              english: definition,
              article: extractArticleFromPos(pos, lemma),
              plural: data.plural || extractPluralFromData(data),
              type: mapPosToType(pos)
            });
          }
        }
      } catch (dwdsError) {
        console.error('DWDS API failed:', dwdsError);
      }

      // Try alternative DWDS search approach
      if (results.length === 0) {
        try {
          const searchUrl = `https://www.dwds.de/api/search?q=${encodeURIComponent(term)}&format=json`;
          console.log('Trying DWDS search API:', searchUrl);
          
          const response = await fetch(searchUrl);
          if (response.ok) {
            const searchData = await response.json();
            console.log('DWDS search data:', searchData);
            
            if (searchData && searchData.results) {
              searchData.results.slice(0, 5).forEach((result, index) => {
                results.push({
                  id: Date.now() + index,
                  german: result.lemma || result.word || term,
                  english: result.definition || result.snippet || 'German word',
                  article: extractArticleFromText(result.snippet || ''),
                  plural: extractPluralFromText(result.snippet || ''),
                  type: mapPosToType(result.pos || '')
                });
              });
            }
          }
        } catch (searchError) {
          console.error('DWDS search failed:', searchError);
        }
      }

      // If DWDS fails, try a simple German word lookup using a different approach
      if (results.length === 0) {
        try {
          // Try Wiktionary as backup
          const wiktionaryUrl = `https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(term)}&format=json&origin=*&prop=wikitext`;
          const response = await fetch(wiktionaryUrl);
          
          if (response.ok) {
            const data = await response.json();
            if (data.parse && data.parse.wikitext) {
              const wikitext = data.parse.wikitext['*'];
              const germanSection = extractGermanSection(wikitext);
              
              if (germanSection) {
                results.push({
                  id: Date.now(),
                  german: term,
                  english: extractDefinitionFromWikitext(germanSection),
                  article: extractArticleFromWikitext(germanSection),
                  plural: extractPluralFromWikitext(germanSection),
                  type: extractTypeFromWikitext(germanSection)
                });
              }
            }
          }
        } catch (wiktionaryError) {
          console.error('Wiktionary backup failed:', wiktionaryError);
        }
      }

      // Final fallback to sample data
      if (results.length === 0) {
        console.log('All APIs failed, using sample data');
        results = sampleDictionary.filter(word =>
          word.german.toLowerCase().includes(term.toLowerCase()) ||
          word.english.toLowerCase().includes(term.toLowerCase())
        );
        
        // If no sample matches, suggest available words
        if (results.length === 0) {
          results = [{
            id: Date.now(),
            german: `"${term}" not found`,
            english: `Try: ${sampleDictionary.slice(0, 5).map(w => w.german).join(', ')}`,
            article: null,
            plural: null,
            type: 'suggestion'
          }];
        }
      }

      console.log('Final results:', results);
      renderSearchResults(results.slice(0, 8));
      
    } catch (error) {
      console.error('Search error:', error);
      
      // Show error with sample suggestions
      const errorResults = [{
        id: Date.now(),
        german: 'Connection Error',
        english: `Cannot reach dictionary. Try offline words: ${sampleDictionary.slice(0, 3).map(w => w.german).join(', ')}`,
        article: null,
        plural: null,
        type: 'error'
      }];
      
      renderSearchResults(errorResults);
    }
  };

  // DWDS-specific helper functions
  const extractArticleFromPos = (pos, lemma) => {
    if (pos && pos.includes('Substantiv')) {
      // Try to guess article from word ending (basic heuristic)
      if (lemma.endsWith('ung') || lemma.endsWith('heit') || lemma.endsWith('keit')) return 'die';
      if (lemma.endsWith('er') && pos.includes('maskulin')) return 'der';
      if (lemma.endsWith('chen') || lemma.endsWith('lein')) return 'das';
    }
    return null;
  };

  const extractPluralFromData = (data) => {
    if (data.forms && data.forms.plural) return data.forms.plural;
    if (data.inflection && data.inflection.plural) return data.inflection.plural;
    return null;
  };

  const mapPosToType = (pos) => {
    if (!pos) return 'unknown';
    pos = pos.toLowerCase();
    if (pos.includes('substantiv') || pos.includes('noun')) return 'noun';
    if (pos.includes('verb')) return 'verb';
    if (pos.includes('adjektiv') || pos.includes('adjective')) return 'adjective';
    if (pos.includes('adverb')) return 'adverb';
    return 'unknown';
  };

  // Wikitext parsing helpers (for backup)
  const extractGermanSection = (wikitext) => {
    const germanMatch = wikitext.match(/==\s*German\s*==(.*?)(?===\s*\w|\n$)/is);
    return germanMatch ? germanMatch[1] : null;
  };

  const extractDefinitionFromWikitext = (germanSection) => {
    const defMatch = germanSection.match(/# (.+?)(?=\n|$)/);
    return defMatch ? defMatch[1].replace(/\[\[([^\]|]+)(\|[^\]]+)?\]\]/g, '$1') : 'German word';
  };

  const extractArticleFromWikitext = (germanSection) => {
    const articleMatch = germanSection.match(/\{\{de-noun\|([^|}]+)/);
    return articleMatch ? articleMatch[1] : null;
  };

  const extractPluralFromWikitext = (germanSection) => {
    const pluralMatch = germanSection.match(/\{\{de-noun\|[^|]*\|([^|}]+)/);
    return pluralMatch ? pluralMatch[1] : null;
  };

  const extractTypeFromWikitext = (germanSection) => {
    if (germanSection.includes('{{de-noun')) return 'noun';
    if (germanSection.includes('{{de-verb')) return 'verb';
    if (germanSection.includes('{{de-adj')) return 'adjective';
    return 'unknown';
  };

  const extractArticleFromText = (text) => {
    const articleMatch = text.match(/\b(der|die|das)\s+/i);
    return articleMatch ? articleMatch[1].toLowerCase() : null;
  };

  const extractPluralFromText = (text) => {
    const pluralMatch = text.match(/Plural[:\s]+([^\s,]+)/i);
    return pluralMatch ? pluralMatch[1] : null;
  };import React, { useState, useRef, useCallback } from 'react';
import { Search, Trash2, ArrowLeft, Loader2 } from 'lucide-react';

const GermanFlashcardApp = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [activeFlashcardSet, setActiveFlashcardSet] = useState(null);
  
  // Use refs instead of state for search to prevent re-renders
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  const currentSearchTerm = useRef('');

  // Comprehensive A1+ vocabulary based on Begegnungen A1+
  const sampleDictionary = [
    // Personal information & Family
    { id: 1, german: 'ich', english: 'I', article: null, plural: null, type: 'pronoun' },
    { id: 2, german: 'du', english: 'you (informal)', article: null, plural: null, type: 'pronoun' },
    { id: 3, german: 'er', english: 'he', article: null, plural: null, type: 'pronoun' },
    { id: 4, german: 'sie', english: 'she/they', article: null, plural: null, type: 'pronoun' },
    { id: 5, german: 'wir', english: 'we', article: null, plural: null, type: 'pronoun' },
    { id: 6, german: 'der Name', english: 'name', article: 'der', plural: 'die Namen', type: 'noun' },
    { id: 7, german: 'die Familie', english: 'family', article: 'die', plural: 'die Familien', type: 'noun' },
    { id: 8, german: 'die Mutter', english: 'mother', article: 'die', plural: 'die Mütter', type: 'noun' },
    { id: 9, german: 'der Vater', english: 'father', article: 'der', plural: 'die Väter', type: 'noun' },
    { id: 10, german: 'das Kind', english: 'child', article: 'das', plural: 'die Kinder', type: 'noun' },
    { id: 11, german: 'der Sohn', english: 'son', article: 'der', plural: 'die Söhne', type: 'noun' },
    { id: 12, german: 'die Tochter', english: 'daughter', article: 'die', plural: 'die Töchter', type: 'noun' },
    { id: 13, german: 'die Schwester', english: 'sister', article: 'die', plural: 'die Schwestern', type: 'noun' },
    { id: 14, german: 'der Bruder', english: 'brother', article: 'der', plural: 'die Brüder', type: 'noun' },
    { id: 15, german: 'die Großmutter', english: 'grandmother', article: 'die', plural: 'die Großmütter', type: 'noun' },
    { id: 16, german: 'der Großvater', english: 'grandfather', article: 'der', plural: 'die Großväter', type: 'noun' },

    // Housing & Living
    { id: 17, german: 'das Haus', english: 'house', article: 'das', plural: 'die Häuser', type: 'noun' },
    { id: 18, german: 'die Wohnung', english: 'apartment', article: 'die', plural: 'die Wohnungen', type: 'noun' },
    { id: 19, german: 'das Zimmer', english: 'room', article: 'das', plural: 'die Zimmer', type: 'noun' },
    { id: 20, german: 'die Küche', english: 'kitchen', article: 'die', plural: 'die Küchen', type: 'noun' },
    { id: 21, german: 'das Badezimmer', english: 'bathroom', article: 'das', plural: 'die Badezimmer', type: 'noun' },
    { id: 22, german: 'das Schlafzimmer', english: 'bedroom', article: 'das', plural: 'die Schlafzimmer', type: 'noun' },
    { id: 23, german: 'das Wohnzimmer', english: 'living room', article: 'das', plural: 'die Wohnzimmer', type: 'noun' },
    { id: 24, german: 'der Balkon', english: 'balcony', article: 'der', plural: 'die Balkone', type: 'noun' },
    { id: 25, german: 'der Garten', english: 'garden', article: 'der', plural: 'die Gärten', type: 'noun' },

    // Furniture & Objects
    { id: 26, german: 'der Tisch', english: 'table', article: 'der', plural: 'die Tische', type: 'noun' },
    { id: 27, german: 'der Stuhl', english: 'chair', article: 'der', plural: 'die Stühle', type: 'noun' },
    { id: 28, german: 'das Bett', english: 'bed', article: 'das', plural: 'die Betten', type: 'noun' },
    { id: 29, german: 'der Schrank', english: 'wardrobe/cupboard', article: 'der', plural: 'die Schränke', type: 'noun' },
    { id: 30, german: 'der Kühlschrank', english: 'refrigerator', article: 'der', plural: 'die Kühlschränke', type: 'noun' },

    // Food & Drinks
    { id: 31, german: 'das Essen', english: 'food/meal', article: 'das', plural: 'die Essen', type: 'noun' },
    { id: 32, german: 'das Brot', english: 'bread', article: 'das', plural: 'die Brote', type: 'noun' },
    { id: 33, german: 'die Butter', english: 'butter', article: 'die', plural: null, type: 'noun' },
    { id: 34, german: 'der Käse', english: 'cheese', article: 'der', plural: 'die Käse', type: 'noun' },
    { id: 35, german: 'die Wurst', english: 'sausage', article: 'die', plural: 'die Würste', type: 'noun' },
    { id: 36, german: 'das Fleisch', english: 'meat', article: 'das', plural: null, type: 'noun' },
    { id: 37, german: 'der Fisch', english: 'fish', article: 'der', plural: 'die Fische', type: 'noun' },
    { id: 38, german: 'das Gemüse', english: 'vegetables', article: 'das', plural: null, type: 'noun' },
    { id: 39, german: 'das Obst', english: 'fruit', article: 'das', plural: null, type: 'noun' },
    { id: 40, german: 'der Apfel', english: 'apple', article: 'der', plural: 'die Äpfel', type: 'noun' },
    { id: 41, german: 'die Banane', english: 'banana', article: 'die', plural: 'die Bananen', type: 'noun' },
    { id: 42, german: 'die Orange', english: 'orange', article: 'die', plural: 'die Orangen', type: 'noun' },
    { id: 43, german: 'die Kartoffel', english: 'potato', article: 'die', plural: 'die Kartoffeln', type: 'noun' },
    { id: 44, german: 'die Tomate', english: 'tomato', article: 'die', plural: 'die Tomaten', type: 'noun' },
    { id: 45, german: 'das Wasser', english: 'water', article: 'das', plural: null, type: 'noun' },
    { id: 46, german: 'der Kaffee', english: 'coffee', article: 'der', plural: 'die Kaffees', type: 'noun' },
    { id: 47, german: 'der Tee', english: 'tea', article: 'der', plural: 'die Tees', type: 'noun' },
    { id: 48, german: 'die Milch', english: 'milk', article: 'die', plural: null, type: 'noun' },
    { id: 49, german: 'das Bier', english: 'beer', article: 'das', plural: 'die Biere', type: 'noun' },
    { id: 50, german: 'der Wein', english: 'wine', article: 'der', plural: 'die Weine', type: 'noun' },

    // Verbs - Daily Activities
    { id: 51, german: 'sein', english: 'to be', article: null, plural: null, type: 'verb' },
    { id: 52, german: 'haben', english: 'to have', article: null, plural: null, type: 'verb' },
    { id: 53, german: 'werden', english: 'to become', article: null, plural: null, type: 'verb' },
    { id: 54, german: 'gehen', english: 'to go', article: null, plural: null, type: 'verb' },
    { id: 55, german: 'kommen', english: 'to come', article: null, plural: null, type: 'verb' },
    { id: 56, german: 'machen', english: 'to make/do', article: null, plural: null, type: 'verb' },
    { id: 57, german: 'sehen', english: 'to see', article: null, plural: null, type: 'verb' },
    { id: 58, german: 'wissen', english: 'to know (facts)', article: null, plural: null, type: 'verb' },
    { id: 59, german: 'kennen', english: 'to know (people/places)', article: null, plural: null, type: 'verb' },
    { id: 60, german: 'sprechen', english: 'to speak', article: null, plural: null, type: 'verb' },
    { id: 61, german: 'hören', english: 'to hear', article: null, plural: null, type: 'verb' },
    { id: 62, german: 'lesen', english: 'to read', article: null, plural: null, type: 'verb' },
    { id: 63, german: 'schreiben', english: 'to write', article: null, plural: null, type: 'verb' },
    { id: 64, german: 'essen', english: 'to eat', article: null, plural: null, type: 'verb' },
    { id: 65, german: 'trinken', english: 'to drink', article: null, plural: null, type: 'verb' },
    { id: 66, german: 'schlafen', english: 'to sleep', article: null, plural: null, type: 'verb' },
    { id: 67, german: 'arbeiten', english: 'to work', article: null, plural: null, type: 'verb' },
    { id: 68, german: 'lernen', english: 'to learn', article: null, plural: null, type: 'verb' },
    { id: 69, german: 'studieren', english: 'to study (university)', article: null, plural: null, type: 'verb' },
    { id: 70, german: 'wohnen', english: 'to live (reside)', article: null, plural: null, type: 'verb' },

    // Time & Numbers
    { id: 71, german: 'die Zeit', english: 'time', article: 'die', plural: 'die Zeiten', type: 'noun' },
    { id: 72, german: 'der Tag', english: 'day', article: 'der', plural: 'die Tage', type: 'noun' },
    { id: 73, german: 'die Woche', english: 'week', article: 'die', plural: 'die Wochen', type: 'noun' },
    { id: 74, german: 'der Monat', english: 'month', article: 'der', plural: 'die Monate', type: 'noun' },
    { id: 75, german: 'das Jahr', english: 'year', article: 'das', plural: 'die Jahre', type: 'noun' },
    { id: 76, german: 'heute', english: 'today', article: null, plural: null, type: 'adverb' },
    { id: 77, german: 'gestern', english: 'yesterday', article: null, plural: null, type: 'adverb' },
    { id: 78, german: 'morgen', english: 'tomorrow', article: null, plural: null, type: 'adverb' },
    { id: 79, german: 'jetzt', english: 'now', article: null, plural: null, type: 'adverb' },
    { id: 80, german: 'früh', english: 'early', article: null, plural: null, type: 'adjective' },
    { id: 81, german: 'spät', english: 'late', article: null, plural: null, type: 'adjective' },

    // Clothing
    { id: 82, german: 'die Kleidung', english: 'clothing', article: 'die', plural: null, type: 'noun' },
    { id: 83, german: 'das Hemd', english: 'shirt', article: 'das', plural: 'die Hemden', type: 'noun' },
    { id: 84, german: 'die Hose', english: 'pants/trousers', article: 'die', plural: 'die Hosen', type: 'noun' },
    { id: 85, german: 'das Kleid', english: 'dress', article: 'das', plural: 'die Kleider', type: 'noun' },
    { id: 86, german: 'der Rock', english: 'skirt', article: 'der', plural: 'die Röcke', type: 'noun' },
    { id: 87, german: 'die Jacke', english: 'jacket', article: 'die', plural: 'die Jacken', type: 'noun' },
    { id: 88, german: 'der Mantel', english: 'coat', article: 'der', plural: 'die Mäntel', type: 'noun' },
    { id: 89, german: 'der Schuh', english: 'shoe', article: 'der', plural: 'die Schuhe', type: 'noun' },

    // Adjectives - Descriptions
    { id: 90, german: 'gut', english: 'good', article: null, plural: null, type: 'adjective' },
    { id: 91, german: 'schlecht', english: 'bad', article: null, plural: null, type: 'adjective' },
    { id: 92, german: 'groß', english: 'big/tall', article: null, plural: null, type: 'adjective' },
    { id: 93, german: 'klein', english: 'small', article: null, plural: null, type: 'adjective' },
    { id: 94, german: 'neu', english: 'new', article: null, plural: null, type: 'adjective' },
    { id: 95, german: 'alt', english: 'old', article: null, plural: null, type: 'adjective' },
    { id: 96, german: 'jung', english: 'young', article: null, plural: null, type: 'adjective' },
    { id: 97, german: 'schön', english: 'beautiful', article: null, plural: null, type: 'adjective' },
    { id: 98, german: 'interessant', english: 'interesting', article: null, plural: null, type: 'adjective' },
    { id: 99, german: 'langweilig', english: 'boring', article: null, plural: null, type: 'adjective' },
    { id: 100, german: 'schwer', english: 'difficult/heavy', article: null, plural: null, type: 'adjective' },
    { id: 101, german: 'leicht', english: 'easy/light', article: null, plural: null, type: 'adjective' },
    { id: 102, german: 'schnell', english: 'fast', article: null, plural: null, type: 'adjective' },
    { id: 103, german: 'langsam', english: 'slow', article: null, plural: null, type: 'adjective' },

    // Transport & Travel
    { id: 104, german: 'das Auto', english: 'car', article: 'das', plural: 'die Autos', type: 'noun' },
    { id: 105, german: 'der Bus', english: 'bus', article: 'der', plural: 'die Busse', type: 'noun' },
    { id: 106, german: 'die Bahn', english: 'train', article: 'die', plural: 'die Bahnen', type: 'noun' },
    { id: 107, german: 'der Zug', english: 'train', article: 'der', plural: 'die Züge', type: 'noun' },
    { id: 108, german: 'das Flugzeug', english: 'airplane', article: 'das', plural: 'die Flugzeuge', type: 'noun' },
    { id: 109, german: 'das Fahrrad', english: 'bicycle', article: 'das', plural: 'die Fahrräder', type: 'noun' },
    { id: 110, german: 'der Bahnhof', english: 'train station', article: 'der', plural: 'die Bahnhöfe', type: 'noun' },
    { id: 111, german: 'der Flughafen', english: 'airport', article: 'der', plural: 'die Flughäfen', type: 'noun' },

    // Work & Professions
    { id: 112, german: 'die Arbeit', english: 'work', article: 'die', plural: 'die Arbeiten', type: 'noun' },
    { id: 113, german: 'der Beruf', english: 'profession', article: 'der', plural: 'die Berufe', type: 'noun' },
    { id: 114, german: 'der Arzt', english: 'doctor (male)', article: 'der', plural: 'die Ärzte', type: 'noun' },
    { id: 115, german: 'die Ärztin', english: 'doctor (female)', article: 'die', plural: 'die Ärztinnen', type: 'noun' },
    { id: 116, german: 'der Lehrer', english: 'teacher (male)', article: 'der', plural: 'die Lehrer', type: 'noun' },
    { id: 117, german: 'die Lehrerin', english: 'teacher (female)', article: 'die', plural: 'die Lehrerinnen', type: 'noun' },
    { id: 118, german: 'der Student', english: 'student (male)', article: 'der', plural: 'die Studenten', type: 'noun' },
    { id: 119, german: 'die Studentin', english: 'student (female)', article: 'die', plural: 'die Studentinnen', type: 'noun' },

    // Places & Locations
    { id: 120, german: 'die Stadt', english: 'city', article: 'die', plural: 'die Städte', type: 'noun' },
    { id: 121, german: 'das Land', english: 'country/land', article: 'das', plural: 'die Länder', type: 'noun' },
    { id: 122, german: 'die Straße', english: 'street', article: 'die', plural: 'die Straßen', type: 'noun' },
    { id: 123, german: 'der Platz', english: 'square/place', article: 'der', plural: 'die Plätze', type: 'noun' },
    { id: 124, german: 'das Geschäft', english: 'shop/store', article: 'das', plural: 'die Geschäfte', type: 'noun' },
    { id: 125, german: 'der Supermarkt', english: 'supermarket', article: 'der', plural: 'die Supermärkte', type: 'noun' },
    { id: 126, german: 'das Restaurant', english: 'restaurant', article: 'das', plural: 'die Restaurants', type: 'noun' },
    { id: 127, german: 'das Café', english: 'café', article: 'das', plural: 'die Cafés', type: 'noun' },
    { id: 128, german: 'die Bank', english: 'bank', article: 'die', plural: 'die Banken', type: 'noun' },
    { id: 129, german: 'die Post', english: 'post office', article: 'die', plural: 'die Poststellen', type: 'noun' },
    { id: 130, german: 'das Hotel', english: 'hotel', article: 'das', plural: 'die Hotels', type: 'noun' },

    // Animals
    { id: 131, german: 'das Tier', english: 'animal', article: 'das', plural: 'die Tiere', type: 'noun' },
    { id: 132, german: 'der Hund', english: 'dog', article: 'der', plural: 'die Hunde', type: 'noun' },
    { id: 133, german: 'die Katze', english: 'cat', article: 'die', plural: 'die Katzen', type: 'noun' },
    { id: 134, german: 'das Futter', english: 'feed, food (for animals)', article: 'das', plural: null, type: 'noun' },
    { id: 135, german: 'füttern', english: 'to feed', article: null, plural: null, type: 'verb' },

    // Common Question Words & Conjunctions
    { id: 136, german: 'was', english: 'what', article: null, plural: null, type: 'interrogative' },
    { id: 137, german: 'wer', english: 'who', article: null, plural: null, type: 'interrogative' },
    { id: 138, german: 'wo', english: 'where', article: null, plural: null, type: 'interrogative' },
    { id: 139, german: 'wann', english: 'when', article: null, plural: null, type: 'interrogative' },
    { id: 140, german: 'wie', english: 'how', article: null, plural: null, type: 'interrogative' },
    { id: 141, german: 'warum', english: 'why', article: null, plural: null, type: 'interrogative' },
    { id: 142, german: 'und', english: 'and', article: null, plural: null, type: 'conjunction' },
    { id: 143, german: 'oder', english: 'or', article: null, plural: null, type: 'conjunction' },
    { id: 144, german: 'aber', english: 'but', article: null, plural: null, type: 'conjunction' },
    { id: 145, german: 'nicht', english: 'not', article: null, plural: null, type: 'adverb' },
    { id: 146, german: 'auch', english: 'also', article: null, plural: null, type: 'adverb' },
    { id: 147, german: 'sehr', english: 'very', article: null, plural: null, type: 'adverb' },
    { id: 148, german: 'nur', english: 'only', article: null, plural: null, type: 'adverb' },
    { id: 149, german: 'hier', english: 'here', article: null, plural: null, type: 'adverb' },
    { id: 150, german: 'da', english: 'there', article: null, plural: null, type: 'adverb' }
  ];

  // Helper functions to extract grammatical information
  const extractArticle = (definition) => {
    const articleMatch = definition.match(/\b(der|die|das)\b/i);
    return articleMatch ? articleMatch[0].toLowerCase() : null;
  };

  const extractPlural = (definition) => {
    const pluralMatch = definition.match(/plural[:\s]+([^,\s]+)/i);
    return pluralMatch ? pluralMatch[1] : null;
  };

  const renderSearchResults = (results, isLoading = false) => {
    if (!searchResultsRef.current) return;

    if (isLoading) {
      searchResultsRef.current.innerHTML = `
        <div class="text-center py-8">
          <div class="inline-flex items-center" style="color: #2d3a2d;">
            <svg class="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Searching...
          </div>
        </div>
      `;
      return;
    }

    if (results.length === 0 && currentSearchTerm.current) {
      searchResultsRef.current.innerHTML = `
        <div class="text-center py-8">
          <p style="color: #6b7280;">No results found for "${currentSearchTerm.current}"</p>
        </div>
      `;
      return;
    }

    if (results.length === 0) {
      searchResultsRef.current.innerHTML = '';
      return;
    }

    const resultsHTML = results.map(word => `
      <div class="search-result bg-white p-4 rounded-lg shadow-sm border hover:border-gray-400 cursor-pointer transition-all hover:shadow-md" 
           style="border-color: #d1d5db;"
           data-word='${JSON.stringify(word)}'>
        <div class="flex justify-between items-center">
          <div class="flex-1">
            <h3 class="font-medium text-lg" style="color: #1a1d1a;">${word.german}</h3>
            <p class="line-clamp-2" style="color: #374151;">${word.english}</p>
            ${word.article ? `
              <p class="text-sm mt-1" style="color: #2d3a2d;">
                ${word.article} • ${word.plural || 'no plural'}
              </p>
            ` : ''}
          </div>
          <div class="text-sm capitalize px-3 py-1 rounded-full ml-4" style="color: #2d3a2d; background-color: #f3f4f6;">
            ${word.type}
          </div>
        </div>
      </div>
    `).join('');

    searchResultsRef.current.innerHTML = `
      <h2 class="text-xl font-light mb-4" style="color: #1a1d1a;">Search Results</h2>
      <div class="space-y-3 max-h-80 overflow-y-auto">
        ${resultsHTML}
      </div>
    `;

    // Add click listeners to results
    searchResultsRef.current.querySelectorAll('.search-result').forEach(element => {
      element.addEventListener('click', () => {
        const word = JSON.parse(element.getAttribute('data-word'));
        setSelectedWord(word);
        const added = addToFlashcards(word);
      });
    });
  };

  // Search function using manual DOM updates
  const performSearch = async (term) => {
    currentSearchTerm.current = term;
    
    if (!term.trim()) {
      renderSearchResults([]);
      return;
    }

    renderSearchResults([], true); // Show loading

    try {
      // Try Wiktionary API first
      const searchResponse = await fetch(
        `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(term)}`
      );

      let results = [];

      if (searchResponse.ok) {
        const data = await searchResponse.json();

        // Process German definitions
        if (data.de) {
          data.de.forEach(definition => {
            definition.definitions.forEach(def => {
              const word = {
                id: Date.now() + Math.random(),
                german: term,
                english: def.definition.replace(/<[^>]*>/g, ''), // Remove HTML tags
                article: extractArticle(def.definition),
                plural: extractPlural(def.definition),
                type: definition.partOfSpeech || 'unknown'
              };
              results.push(word);
            });
          });
        }

        // If no German results, try English to German
        if (results.length === 0 && data.en) {
          const word = {
            id: Date.now(),
            german: `(Search German translation for "${term}")`,
            english: term,
            article: null,
            plural: null,
            type: 'unknown'
          };
          results.push(word);
        }
      }

      // If Wiktionary fails, try the backup search API
      if (results.length === 0) {
        const fallbackResponse = await fetch(
          `https://en.wiktionary.org/w/api.php?action=opensearch&search=${encodeURIComponent(term)}&limit=8&format=json&origin=*`
        );
        
        if (fallbackResponse.ok) {
          const [, titles, descriptions] = await fallbackResponse.json();
          results = titles.map((title, index) => ({
            id: Date.now() + index,
            german: title,
            english: descriptions[index] || `Definition for "${title}"`,
            article: extractArticle(title),
            plural: null,
            type: 'unknown'
          }));
        }
      }

      // Final fallback to sample data
      if (results.length === 0) {
        results = sampleDictionary.filter(word =>
          word.german.toLowerCase().includes(term.toLowerCase()) ||
          word.english.toLowerCase().includes(term.toLowerCase())
        );
      }

      renderSearchResults(results.slice(0, 10));
    } catch (error) {
      console.error('Search error:', error);
      
      // Fallback to sample data
      const results = sampleDictionary.filter(word =>
        word.german.toLowerCase().includes(term.toLowerCase()) ||
        word.english.toLowerCase().includes(term.toLowerCase())
      );
      renderSearchResults(results);
    }
  };

  const handleSearchInput = useCallback((e) => {
    const term = e.target.value;
    currentSearchTerm.current = term;

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set new timeout
    searchTimeoutRef.current = setTimeout(() => {
      performSearch(term);
    }, 500);
  }, []);

  const addToFlashcards = (word) => {
    const existingCard = flashcards.find(card => 
      card.german.toLowerCase() === word.german.toLowerCase()
    );
    if (!existingCard) {
      const flashcard = {
        ...word,
        id: Date.now() + Math.random(),
        difficulty: 0,
        lastReviewed: null,
        nextReview: Date.now(),
        correctCount: 0,
        almostCount: 0,
        wrongCount: 0
      };
      setFlashcards(prev => [...prev, flashcard]);
      return true;
    }
    return false;
  };

  const removeFromFlashcards = (flashcardId) => {
    setFlashcards(prev => prev.filter(card => card.id !== flashcardId));
  };

  const updateFlashcardDifficulty = (flashcardId, result) => {
    setFlashcards(prev =>
      prev.map(card => {
        if (card.id === flashcardId) {
          let newDifficulty = card.difficulty;
          let nextReviewDelay;

          switch (result) {
            case 'correct':
              newDifficulty = Math.max(0, card.difficulty - 1);
              nextReviewDelay = Math.pow(2, newDifficulty + 1) * 24 * 60 * 60 * 1000;
              break;
            case 'almost':
              nextReviewDelay = 2 * 60 * 60 * 1000;
              break;
            case 'wrong':
              newDifficulty = card.difficulty + 2;
              nextReviewDelay = 10 * 60 * 1000;
              break;
          }

          return {
            ...card,
            difficulty: newDifficulty,
            lastReviewed: Date.now(),
            nextReview: Date.now() + nextReviewDelay,
            correctCount: result === 'correct' ? card.correctCount + 1 : card.correctCount,
            almostCount: result === 'almost' ? card.almostCount + 1 : card.almostCount,
            wrongCount: result === 'wrong' ? card.wrongCount + 1 : card.wrongCount
          };
        }
        return card;
      })
    );
  };

  const getFlashcardsForSet = (setType) => {
    switch (setType) {
      case 'articles':
        return flashcards.filter(card => card.type === 'noun' && card.article);
      case 'all':
        return flashcards;
      default:
        return flashcards;
    }
  };

  const startFlashcardSession = (setType) => {
    const cards = getFlashcardsForSet(setType);
    if (cards.length > 0) {
      setActiveFlashcardSet(setType);
      setCurrentFlashcardIndex(0);
      setCurrentFlashcard(cards[0]);
      setShowAnswer(false);
      setCurrentView('practice');
    }
  };

  const nextFlashcard = () => {
    const cards = getFlashcardsForSet(activeFlashcardSet);
    const nextIndex = (currentFlashcardIndex + 1) % cards.length;
    setCurrentFlashcardIndex(nextIndex);
    setCurrentFlashcard(cards[nextIndex]);
    setShowAnswer(false);
  };

  const handleAnswer = (result) => {
    if (currentFlashcard) {
      updateFlashcardDifficulty(currentFlashcard.id, result);
    }
    setTimeout(nextFlashcard, 800);
  };

  const HomeView = () => (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-light mb-6 text-center" style={{ color: '#1a1d1a' }}>German Learning</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5" style={{ color: '#2d3a2d' }} />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for German or English words..."
            onChange={handleSearchInput}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent text-lg bg-white"
            style={{ 
              borderColor: '#d1d5db',
              color: '#1a1d1a',
              focusRingColor: '#2d3a2d'
            }}
            autoComplete="off"
            autoFocus
          />
        </div>

        {/* Search Results Container */}
        <div ref={searchResultsRef} className="mb-8"></div>

        {/* Search hints */}
        <div className="text-center py-8">
          <div className="mb-4" style={{ color: '#2d3a2d' }}>
            <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
            <p className="text-lg">Search for any German or English word</p>
            <p className="text-sm opacity-75">Try: "Haus", "Katze", "schön", "Auto"</p>
          </div>
        </div>
      </div>

      {/* Flashcard Sets */}
      <div className="mb-8">
        <h2 className="text-xl font-light mb-4" style={{ color: '#1a1d1a' }}>Practice Sets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => startFlashcardSession('articles')}
            className={`bg-white p-6 rounded-lg shadow-sm border hover:border-gray-400 cursor-pointer transition-all hover:shadow-md ${
              getFlashcardsForSet('articles').length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ borderColor: '#d1d5db' }}
          >
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-medium mb-2" style={{ color: '#1a1d1a' }}>Der, Die, Das</h3>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Practice articles with nouns and adjectives
            </p>
            <p className="text-sm" style={{ color: '#2d3a2d' }}>
              {getFlashcardsForSet('articles').length} cards available
            </p>
            {getFlashcardsForSet('articles').length > 0 && (
              <div className="text-white px-4 py-2 rounded-lg text-sm font-medium mt-3 inline-block" style={{ backgroundColor: '#2d3a2d' }}>
                Start Practice
              </div>
            )}
            {getFlashcardsForSet('articles').length === 0 && (
              <p className="text-xs mt-2" style={{ color: '#6b7280' }}>Search for nouns to add cards</p>
            )}
          </div>

          <div
            onClick={() => startFlashcardSession('all')}
            className={`bg-white p-6 rounded-lg shadow-sm border hover:border-gray-400 cursor-pointer transition-all hover:shadow-md ${
              flashcards.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ borderColor: '#d1d5db' }}
          >
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-medium mb-2" style={{ color: '#1a1d1a' }}>All Words</h3>
            <p className="text-sm mb-3" style={{ color: '#374151' }}>
              Practice all your looked up words
            </p>
            <p className="text-sm" style={{ color: '#2d3a2d' }}>
              {flashcards.length} cards available
            </p>
            {flashcards.length > 0 && (
              <div className="text-white px-4 py-2 rounded-lg text-sm font-medium mt-3 inline-block" style={{ backgroundColor: '#2d3a2d' }}>
                Start Practice
              </div>
            )}
            {flashcards.length === 0 && (
              <p className="text-xs mt-2" style={{ color: '#6b7280' }}>Search for words to start building your deck</p>
            )}
          </div>
        </div>
      </div>

      {/* Your Flashcards Summary */}
      {flashcards.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-green-100 p-6">
          <h2 className="text-xl font-light text-green-800 mb-4">Your Vocabulary ({flashcards.length} words)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-lg font-medium text-green-800">{flashcards.length}</div>
              <div className="text-sm text-green-600">Total Words</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-lg font-medium text-green-800">
                {flashcards.filter(card => card.type === 'noun').length}
              </div>
              <div className="text-sm text-green-600">Nouns</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-lg font-medium text-green-800">
                {flashcards.filter(card => card.type === 'verb').length}
              </div>
              <div className="text-sm text-green-600">Verbs</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-lg font-medium text-green-800">
                {flashcards.filter(card => card.type === 'adjective').length}
              </div>
              <div className="text-sm text-green-600">Adjectives</div>
            </div>
          </div>
        </div>
      )}

      {/* Word Details Modal */}
      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-light text-green-800 mb-2">{selectedWord.german}</h2>
              <p className="text-lg text-gray-700 mb-4">{selectedWord.english}</p>
              
              {selectedWord.article && (
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h3 className="font-medium text-green-800 mb-1">Article</h3>
                    <p className="text-green-700">{selectedWord.article}</p>
                  </div>
                  {selectedWord.plural && (
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h3 className="font-medium text-green-800 mb-1">Plural</h3>
                      <p className="text-green-700">{selectedWord.plural}</p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="bg-green-50 p-3 rounded-lg mt-3">
                <h3 className="font-medium text-green-800 mb-1">Type</h3>
                <p className="text-green-700 capitalize">{selectedWord.type}</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-sm mb-4">
                ✓ Added to your flashcards!
              </div>
              <button
                onClick={() => {
                  setSelectedWord(null);
                  // Refocus search input
                  setTimeout(() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }, 100);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const PracticeView = () => {
    const cards = getFlashcardsForSet(activeFlashcardSet);
    
    if (!currentFlashcard || cards.length === 0) {
      return (
        <div className="max-w-2xl mx-auto p-6 text-center">
          <h2 className="text-2xl font-light text-green-800 mb-4">No cards available</h2>
          <p className="text-green-600 mb-6">Add some words to your flashcards first!</p>
          <button
            onClick={() => setCurrentView('home')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => {
              setCurrentView('home');
              setCurrentFlashcard(null);
              setShowAnswer(false);
            }}
            className="flex items-center text-green-600 mb-4 hover:text-green-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </button>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-light text-green-800 capitalize">
              {activeFlashcardSet === 'articles' ? 'Der, Die, Das Practice' : 'All Words Practice'}
            </h2>
            <div className="text-green-600">
              {currentFlashcardIndex + 1} / {cards.length}
            </div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="bg-white rounded-lg shadow-sm border border-green-100 p-8 text-center mb-6">
          <div className="mb-6">
            <h3 className="text-4xl font-light text-green-800 mb-4">
              {currentFlashcard.german}
            </h3>
            
            {showAnswer ? (
              <div className="space-y-4">
                <p className="text-2xl text-gray-700">{currentFlashcard.english}</p>
                {currentFlashcard.article && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <span className="font-medium text-green-800">Article:</span>
                        <span className="text-green-700 ml-2">{currentFlashcard.article}</span>
                      </div>
                      {currentFlashcard.plural && (
                        <div>
                          <span className="font-medium text-green-800">Plural:</span>
                          <span className="text-green-700 ml-2">{currentFlashcard.plural}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Answer Buttons */}
                <div className="flex gap-3 justify-center pt-4">
                  <button
                    onClick={() => handleAnswer('wrong')}
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    No
                  </button>
                  <button
                    onClick={() => handleAnswer('almost')}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    Almost
                  </button>
                  <button
                    onClick={() => handleAnswer('correct')}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    Yes
                  </button>
                </div>

                {/* Remove from set button */}
                <div className="pt-4 border-t border-green-100 mt-6">
                  <button
                    onClick={() => {
                      removeFromFlashcards(currentFlashcard.id);
                      const remainingCards = cards.filter(card => card.id !== currentFlashcard.id);
                      if (remainingCards.length > 0) {
                        const nextIndex = currentFlashcardIndex >= remainingCards.length 
                          ? 0 
                          : currentFlashcardIndex;
                        setCurrentFlashcardIndex(nextIndex);
                        setCurrentFlashcard(remainingCards[nextIndex]);
                        setShowAnswer(false);
                      } else {
                        setCurrentView('home');
                        setCurrentFlashcard(null);
                      }
                    }}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1 mx-auto transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove from flashcards
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAnswer(true)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Show Answer
              </button>
            )}
          </div>
        </div>

        {/* Progress Stats */}
        {currentFlashcard && (
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <p className="text-sm text-green-700">
              Correct: {currentFlashcard.correctCount} • 
              Almost: {currentFlashcard.almostCount} • 
              Wrong: {currentFlashcard.wrongCount}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ 
      backgroundColor: '#f8f9fa',
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      {currentView === 'home' && <HomeView />}
      {currentView === 'practice' && <PracticeView />}
    </div>
  );
};

export default GermanFlashcardApp;

const Spiderman = require("./../app/spiderman")

describe("Unit test class Spiderman", () => {
    test('Case 1.- Create Spiderman object', () => {
      
      const spiderman1 = new Spiderman("Spider-man", 46, "Tobey Maguire", 3, "SONY");
      
      expect(spiderman1.name).toBe("Spider-man");
      expect(spiderman1.age).toBe(46);
      expect(spiderman1.actor).toBe("Tobey Maguire");
      expect(spiderman1.numMovies).toBe(3);
      expect(spiderman1.studio).toBe("SONY")
    });

    test('Case 2.- Use the method getInfo()', () => {
      const spiderman1 = new Spiderman("Spider-man", 46, "Tobey Maguire", 3, "SONY");

      expect(spiderman1.getInfo()).toBe("Hey, I'm Tobey Maguire from SONY studio")
    })
  })
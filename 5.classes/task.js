class PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null
   }

   set state(newState) {
      if (newState < 0) {
         this._state = 0;
      } else if (newState > 100) {
         this._state = 100;
      } else {
         this._state = newState;
      }
   }

   get state() {
      return this._state;
   }

   fix() {
      if (this.state >= 100 || this.state <= 0) {
         return;
      }
      this._state *= 1.5;
      if (this._state > 100) {
         return this._state = 100;
      }
   }
};

class Magazine extends PrintEditionItem {
   constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
   }
}

class Book extends PrintEditionItem {
   constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
   }
}

class NovelBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
   }
}

class FantasticBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
   }
}

class DetectiveBook extends Book {
   constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
   }
}

class Library {
   constructor(name) {
      this.name = name;
      this.books = [];
   }

   addBook(book) {
      if (book.state > 30) {
         this.books.push(book)
      }
   }

   findBookBy(type, value) {
      for (const book of this.books) {
         if (book[type] === value) {
            return book;
         }
      }
      return null;
   }

   giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
         if (this.books[i].name === bookName) {
            return this.books.splice(i, 1)[0];
         }
      }
      return null;
   }
}
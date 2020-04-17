showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category {
  JavaScript,
  CSS,
  HTML,
  TypeScript,
  Angular,
}

function getAllBooks(): any[] {
  const books: any[] = [
    {
      title: 'Refactoring JavaScript',
      author: 'Evan Burchard',
      available: true,
      category: Category.JavaScript,
    },
    {
      title: 'JavaScript Testing',
      author: 'Liang Yuxian Eugene',
      available: false,
      category: Category.JavaScript,
    },
    {
      title: 'CSS Secrets',
      author: 'Lea Verou',
      available: true,
      category: Category.CSS,
    },
    {
      title: 'Mastering JavaScript Object-Oriented Programming',
      author: 'Andrea Chiarelli',
      available: true,
      category: Category.JavaScript,
    },
  ];
  return books;
}

function logFirstAvailable(books: any[]): void {
  const numOfBooks: number = books.length;
  let title: string = '';

  for (const book of books) {
    if (book.available) {
      title = book.title;
      break;
    }
  }

  console.log(`Total number of books: ${numOfBooks}`);
  console.log(`First available book: ${title}`);
}

// logFirstAvailable(getAllBooks());

function getBookTitlesByCategory(category: Category): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for (let book of books) {
    if (book.category === category) {
      titles.push(book.title);
    }
  }
  return titles;
}

function logBookTitles(titles: string[]): void {
  for (const title of titles) {
    console.log(title);
  }
}

// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [string, string] {
  const books = getAllBooks();
  const { title, author } = books[index];
  return [title, author];
}

function calcTotalPages(): bigint {
  const data = [
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
  ];

  const result = data.reduce((acc: bigint, lib: any) => {
    return acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook);
  }, 0n);

  return result;
}

console.log(calcTotalPages());

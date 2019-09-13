describe('your Vue app', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  it('check form and elements', async () => {
    await expect(page).toMatchElement('form');
    await expect(page).toMatchElement('input', 'Buscar Cep');
    await expect(page).toMatchElement('input[type="search"]');
    await expect(page).not.toMatchElement('section.wrapper-modal');
  });

  it('check form and elements', async () => {
    const search = 'input[type="search"]';
    const submit = 'input[type="submit"]';
    let firstNameInputClass;
    await page.waitForSelector(search);
    await page.type(search, 'Headless Chrome');
    await page.click(submit);
    await expect(page).toMatchElement('section.wrapper-modal');
  });
});

describe('your Vue app', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:8080');
  });

  it('check form and elements', async () => {
    await expect(page).toMatchElement('form');
    await expect(page).toMatchElement('input', 'Buscar Cep');
    await expect(page).toMatchElement('input[type="search"]');
    await expect(page).toMatchElement('section.wrapper-modal');
  });
});

describe("Verificar filtro de busca da diretoria", () => {
  before(() => {
    cy.visit("/");
    cy.login();
  });

  it("Validar tela", () => {
    cy.get("#menu_directory_viewDirectory > b")
      .should("be.visible")
      .should("have.text", "Directory")
      .click();

    cy.get(".head > h1").should("have.text", "Search Directory");
  });

  it("Validar busca: resultado existente", () => {
    cy.get("#searchBtn").should("be.visible").click();

    cy.login();

    cy.get("#searchDirectory_emp_name_empName")
      .should("be.visible")
      .type("Odis Adalwin")
      .should("have.value", "Odis Adalwin");

    cy.get("#searchBtn").should("be.visible").click();
    cy.get("#resultTable").should("have.contain", "Odis Adalwin");
  });

  it("Validar busca: resultado inexistente", () => {
    cy.get("#searchBtn").should("be.visible").click();

    cy.login();

    cy.get("#searchDirectory_emp_name_empName")
      .should("be.visible")
      .type("Odis Adalwin")
      .should("have.value", "Odis Adalwin");

    cy.get("#searchDirectory_job_title")
      .should("be.visible")
      .select("Automation Tester")
      .should("have.value", "26");

    cy.get("#searchBtn").should("be.visible").click();

    cy.get("#divNoResults")
      .siblings(".inner")
      .should("be.visible")
      .should("have.contain", "No Records Found");
  });
});

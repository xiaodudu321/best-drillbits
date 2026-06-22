const rfqButton = document.querySelector("#rfqButton");

if (rfqButton) {
  rfqButton.addEventListener("click", () => {
    const subject = encodeURIComponent("RFQ for Tdrill PDC drill bits");
    const body = encodeURIComponent(
      [
        "Hello Sichuan Winter,",
        "",
        "Please help review the following PDC drill bit requirement:",
        "",
        "Company:",
        "Country:",
        "Application:",
        "Bit size / hole size:",
        "Formation:",
        "Connection:",
        "Quantity:",
        "Delivery location:",
        "Available drilling parameters:",
        "Attachments to be sent separately:",
        "",
        "Best regards,",
      ].join("\n")
    );

    window.location.href = `mailto:xiaodudu3210@gmail.com?subject=${subject}&body=${body}`;
  });
}

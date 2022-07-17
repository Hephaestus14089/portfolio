const addrPrefix = "../Certificate/";

const certificates = [
  {
    'name': "C Fundamentals",
    'imgAddr': `${addrPrefix}C_FUNDAMENTALS.jpg`
  },
  {
    'name': "Programming For Everybody",
    'imgAddr': `${addrPrefix}PROGRAMMING_FOR_EVERYBODY.jpg`
  },
  {
    'name': "Python Datastructures",
    'imgAddr': `${addrPrefix}PYTHON_DS.jpg`
  },
  {
    'name': "Java Basics",
    'imgAddr': `${addrPrefix}JAVA_BASICS.png`
  },
  {
    'name': "OOP Fundamentals with Java",
    'imgAddr': `${addrPrefix}OOP_FUNDAMENTALS_WITH_JAVA.jpeg`
  },
  {
    'name': "Tech Quiz",
    'imgAddr': `${addrPrefix}TECH_QUIZ.jpeg`
  },
  {
    'name': "NIT Training and Skill Development",
    'imgAddr': `${addrPrefix}NIT_SKILL_DEV.jpg`
  },
  {
    'name': "Rock Climbing",
    'imgAddr': `${addrPrefix}ROCK_CLIMBING.jpg`
  }
];

function addCertificate(certificate) {
  $('.certificates').append(`
    <div class="certificate">
        <div class="certHeader">
          <p>${certificate.name}</p>
          <p class="viewCertImg">View</p>
          <p class="closeCertImg">Close</p>
        </div>
        <div class="certImg">
          <a target="_blank" href=${certificate.imgAddr}>
            <img src="${certificate.imgAddr}" alt="${certificate.name}" />
          </a>
        </div>
    </div>
  `);
}

$(() => {
  certificates.forEach(certificate => {
    addCertificate(certificate)
  });

  $('.viewCertImg').click(e => {
    const self = e.target;

    $('.certImg').css("display", "none");
    $('.closeCertImg').css("display", "none");
    $('.viewCertImg').css("display", "inline-block");

    $(self)
      .parent()
      .siblings('.certImg')
      .css("display", "inline-block")
    ;

    $(self).css("display", "none");

    $(self)
      .siblings('.closeCertImg')
      .css("display", "inline-block")
    ;
  });

  $('.closeCertImg').click(e => {
    const self = e.target;

    $(self)
      .parent()
      .siblings('.certImg')
      .css("display", "none")
    ;

    $(self).css("display", "none");

    $(self)
      .siblings('.viewCertImg')
      .css("display", "inline-block")
    ;
  });
});

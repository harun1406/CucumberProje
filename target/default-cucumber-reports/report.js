$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ebay.feature");
formatter.feature({
  "name": "Ebayda Arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"\u003cnesneler\u003e\" yazar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nesneler"
      ]
    },
    {
      "cells": [
        "araba"
      ]
    },
    {
      "cells": [
        "bebek arabası"
      ]
    },
    {
      "cells": [
        "bisiklet"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"araba\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"bebek arabası\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC06_kullanici ebayda urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ebayarama"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"http://ebay.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebayda aramakutusuna \"bisiklet\" yazar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebayda_aramakutusuna_yazar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici ebaydaki sonuc sayisini ekrana yazar",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.EbayStepDefinitions.kullanici_ebaydaki_sonuc_sayisini_ekrana_yazar()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});_ekrana_yazdirir()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});
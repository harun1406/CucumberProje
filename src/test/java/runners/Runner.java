package runners;


import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports"},  //rapor olusturmak icin
        features = "src/test/resources/features",  //features klasorunun adresi
        glue = "stepdefinitions",  //testlerinin icerisinde oldugu paketin ismi
        tags = "@walmart", // seçtiğiniz tag'a ait testler çalıştırılır.
        dryRun = true // senaryoda olusturdugumuz ancak henuz test metodu yazilmamis olan
                      // adimlarin(steps) methodlarini consol'da gormek icin "dryRun = true"
                     // seklinde kullaniyoruz


        // dryRun = false olursa, testleri calistirir
       // dryRun = true olursa, eksik olan methodlari bulur ve size oneride bulunur.

)

public class Runner {




}

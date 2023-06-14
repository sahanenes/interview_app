## Marvel Projesi

Bu projenin amacı, Marvel hayranlarının Marvel evreni hakkında daha fazla bilgi edinmelerine ve çeşitli karakterler, çizgi romanlar, seriler, etkinlikler ve daha fazlası hakkında ayrıntılı bilgilere erişim sağlamalarına yardımcı olmaktır.

Bu projenin ana amacı aşağıdaki özellikleri sağlamaktır:

1. Karakter Bilgileri: Kullanıcılar, Marvel evrenindeki popüler karakterler hakkında ayrıntılı bilgilere erişebilirler. Her karakterin adı, seri, resim vb. bilgileri görüntülenebilir.

2. Seriler: Kullanıcılar, Marvel evrenindeki çeşitli seriler hakkında bilgilere erişebilirler. Her seri için ad, resim ve yazar bilgileri görüntülenebilir.

## NASIL KURULUR ?

Projeyi lokalinize aldıktan sonra cd ile ilgili dosyanın içerisine giriş yapın.
Ana dizinde .env dosyası oluşturun. Bu dosyanın içerisinde

REACT_APP_domain=  
REACT_APP_clientId=  
REACT_APP_audience=  
REACT_APP_API_KEY=  
REACT_APP_HASH=

bilgilerini girmeniz gerekmektedir.

Yukarıdaki bilgileri alıp .env dosyasına kopyalayın.

domain,clientId ve audience için bu [link e gidin](https://manage.auth0.com/dashboard/us/dev-iq3yn80d34jbrf1v/) , yeni hesap oluşturun , yeni bir application oluşturun ,bilgileri alın ve .env dosyasında ilgili bölümlere = den sonrasına kopyalayın.

API_KEY ve HASH için bu [link e gidin](https://developer.marvel.com/documentation/authorization). public key i .env dosyasındaki API_KEY yazan kısımda = den sonrasına kopyalayın. Sayfada gösterilen şekilde hashleme yaptıktan sonra ise hashlediğiniz rakamları .env dosyasındaki HASH yazan kısmın = den sonrasına kopyalayın.

Terminalde **npm install** daha sonra **npm start** kodunu çalıştırın ve projenizi browser ınızda göreceksiniz.

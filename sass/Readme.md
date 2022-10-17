# SASS (SCSS) Nedir ?

SASS VEYA SCSS derleyici ile css dosyalarına dönüştürülür.

Rubyinstaller gereklidir.

css dosyamız main.scss şeklinde oluşturulur fakat yolu .css vermek gerekir

```csharp
sass —watch .
// cmd de sass dosyasını izler bundle eder 
```

<aside>
🎆 main.scss

</aside>

```scss
body{
    width: 960px;
    margin: 0 auto;
}

section{
    article{
        .article_title{
            font-size: 32px;
            color:red;
        }

        span{
            font-size: 14px;
            background-color: black;
            color: white;
            padding: 5px;
            font-weight: bold;
        }
    }
}
```

<aside>
🎆 main.css

</aside>

```css
body {
  width: 960px;
  margin: 0 auto; }

section article .article_title {
  font-size: 32px;
  color: red; }
section article span {
  font-size: 14px;
  background-color: black;
  color: white;
  padding: 5px;
  font-weight: bold; }

/*# sourceMappingURL=main.css.map */
```

<aside>
🎆  & işareti

</aside>

```scss
.article_body{
            a{
                color:green;
                text-decoration: none;
                &:hover{
                    text-decoration: underline;
                    color:greenyellow;
                }
            }
        }
& kendinden önceki etiketi temsil eder burada a:hover olmuş olur
```

<aside>
🎆 Değişken oluşturma ve kullanma

</aside>

```scss
$back-color : #cd9791;
body{
    width: 960px;
    margin: 0 auto;
    background-color: $back-color;
}
```

<aside>
🎆 Inheritance yapısı

</aside>

```scss
.box{
    width: 200px;
    height: 200px;
    background-color: blue;
    margin: 5px;
    display: inline-block
}

.box1 {
    @extend .box;
    background: green;
    border: 2px double red
}
.box2 {
    @extend .box;
    border-radius: 20px
}
.box3 {
    @extend .box;
    border-radius: 100%;
    background: $sec-color;
}

//hepsi box ı miras alır ve extra özellikte tanımlanabilir
```
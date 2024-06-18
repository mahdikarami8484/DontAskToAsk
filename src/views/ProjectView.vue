<template>
  <div id="section-nopv" class="section-main">
    <div class="holder">
      <p>
        یکی از مشکلاتی که افراد متخصص و کارفرما ها با آن مشکل دارند و باعث اتلاف
        وقت متخصص و کارفرما میشه، عدم شرح کامل پروژه و جزئیات آن در انجمن و گروه
        ها است.
      </p>

      <section class="scenario scenario-wrong">
        <h2>
          <i class="icon-x"></i>
          نمونه های اشتباه
        </h2>

        <hr />

        <SpeechBubble author="آشنای اول" alignment="right">
          <template #content>
            سلام یک پروژه دارم با دستمزد بالا هرکسی مایل بود بیاد پیوی.
          </template>
        </SpeechBubble>

        <hr />

        <SpeechBubble author="آشنای دوم" alignment="right">
          <template #content>
            سلام نیاز به یک سایت شبیه دیجیکالا دارم هرکسی واقعا بلده بیاد
          </template>
        </SpeechBubble>

        <hr />

        <SpeechBubble author="آشنای سوم" alignment="right">
          <template #content>
            سلام استخدام برنامه نویس وبسایت با حقوق و دستمزد بالا
            <br />
            هرکس تمایل داره بیاد پیوی
          </template>
        </SpeechBubble>

        <hr />

        <SpeechBubble author="آشنای چهارم" alignment="right">
          <template #content>
            نیاز به یک فرد خانم دورکار برای طراحی وبسایت داریم
          </template>
        </SpeechBubble>

        <hr />

        <SpeechBubble author="آشنای پنجم" alignment="right">
          <template #content>
            سلام یک پروژه فوری دارم هرکسی بلده بیاد پیوی
          </template>
        </SpeechBubble>
      </section>

      <p>
        شاید بارها پروژه خود را همانند نمونه های اشتباه بیان کرده باشید و شاید
        هم این نمونه های برایتان خنده آور باشد.
      </p>

      <p>
        در این نمونه هایی که مشاهده کردید اصلا درمورد اینکه پروژه چی هست و چه
        تکنولوژي هایی نیاز داره چیزی گفته نشده و
        <span style="font-weight: 900; font-size: 1.1rem">
          صرفا یک جمله خبری است که شما پروژه
        </span>
        دارید.
      </p>

      <p>
        این جور بیان پروژه باعث میشه که متخصص مورد نظرتون پیدا نکنید و فقط وقت
        خود و متخصص را تلف کنید و
        <span style="font-weight: 900; font-size: 1.1rem"> مقصر شمایید! </span>
      </p>

      <section class="scenario scenario-info">
        <h2><i class="icon-check"></i> ساختار پیشنهادی </h2>

        <hr />

        <SpeechBubble alignment="right">
          <template #content
            >
            ۱ - هدف پروژه
            <br>
            ۲ - توضیحات پروژه
            <br>
            ۳ - تکنولوژی ها و تخصص های مورد نیاز
            <br>
            ۴ - نوع همکاری ( تمام وقت ، پاره وقت ، کارآموزی )
            <br>
            ۵ - حضوری یا دورکاری
            <br>
            ۶ - زمان مور نیاز
            <br>

            ۷ - دستمزد و بودجه پروژه ( میتونه توافقی هم باشه )
            <br>
            ۸ - راه ارتباطی
            </template
          >
        </SpeechBubble>

        <hr>

        <SpeechBubble alignment="right" author="مثال">
          <template #content
            >
            
            سلام وقت بخیر، تیم ما برای قسمت بک اند وبسایت نیاز به یک برنامه نویس جونیور بک اند داریم که به موارد زیر آشنا باشد:
            <br>
            - PHP
            <br>
            - MVC
            <br>
            - MYSQL 
            <br>
            - Laravel
            <br>
            - Docker
            <br>
            نوع فعالیت در تیم ما به صورت تمام وقت و دورکاری است
            رنج حقوق از 12 میلیون تا 15 میلیون است که درمورد رقم دقیق آن توافق خواهد شد.

            <br>

            دوستانی که تمایل به همکاری دارند می توانند از طریق همین پیوی اکانت یا ایمیل زیر رزومه خود را ارسال کنند تا مورد بررسی قرار بگیرد.

            <br>
            support@developix.ir
            </template
          >
        </SpeechBubble>

      </section>
    </div>
  </div>
</template>

<script>
import SpeechBubble from "../components/SpeechBubble.vue";

export default {
  name: "NoPvView",
  components: {
    SpeechBubble,
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

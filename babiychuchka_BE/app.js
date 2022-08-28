const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Painting = require('./models/Painting');

mongoose
  .connect('')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/paintings', (req, res, next) => {
  const painting = new Painting({
    title: req.body.title,
    id: req.body.id,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    available: req.body.available,
  });
  painting.save();
  res.status(201).json({
    message: 'Painting added successfully',
  });
});

app.put('/api/paintings/:id', (req, res, next) => {
  const painting = new Painting({
    title: req.body.title,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
    available: req.body.available,
  });
  Painting.updateOne({ id: req.params.id }, painting).then((result) => {
    console.log(result);
    res.status(200).json({ message: 'Painting updated successfully' });
  });
});

app.get('/api/paintings', (req, res, next) => {
  Painting.find().then((documents) => {
    res.status(200).json({
      message: 'Paintings fetched successfully!',
      paintings: documents,
    });
  });
});

app.delete('/api/paintings/:id', (req, res, next) => {
  Painting.deleteOne({ id: req.params.id }).then((result) => {
    res.status(200).json({ message: 'Painting deleted' });
  });
});

app.get('/api/poetry', (req, res, next) => {
  const poetry = [
    {
      id: '1',
      title: '«Осінній вітре, що могучим стоном…»',
      text: 'Осінній вітре, що могучим стоном Над лісом стогнеш, мов над сином мати, Що хмари люто гониш небосклоном, Мов хочеш зиму, сон і смерть прогнати; Що у щілинах диким виєш тоном І рвеш солому із сільської хати, Зів’яле листя гоном-перегоном По полю котиш, – вітре мій крилатий! Я довго пильно слухав стону твого І знаю, чом так стогнеш ти і плачеш: Тобі жаль сонця, цвіту, дня літнього! О вітре-брате! Як мене побачиш Старим, зів’ялим, чи й по мні заплачеш, Чи гнівно слід буття завієш мого?..',
      date: '01/01/2018',
    },
    {
      id: '2',
      title: 'Vivere memento!',
      text: 'Весно, що за чудо ти Твориш в моїй груди? Чи твій поклик з мертвоти Й серце к жизні будить? Вчора тлів, мов Лазар, я В горя домовині – Що ж се за нова зоря Мені блисла нині? Дивний голос мя кудись Кличе – тут-то, ген-то: «Встань, прокинься, пробудись! Vivere memento!» Вітре теплий, брате мій, Чи твоя се мова? Чи на гірці світляній Так шумить діброва? Травко, чи се, може, та Втішно так шептала, Що з-під криги мертвоти Знов на світло встала? Чи се, може, шемріт твій, Річко, срібна ленто, Змив мій смуток і застій? Vivere memento! Всюди чую любий глас, Клик життя могучий… Весно, вітре, люблю вас, Гори, ріки, тучі! Люди, люди! Я ваш брат, Я для вас рад жити, Серця свого кров’ю рад Ваше горе змити. А що кров не зможе змить, Спалимо огнем то! Лиш боротись значить жить… Vivere memento!',
      date: '01/01/2018',
    },
    {
      id: '3',
      title: '«Ночі безмірнії, ночі безсоннії…»',
      text: 'Ночі безмірнії, ночі безсоннії, Горе моє! Мозок наляжуть думки невгомоннії, В серці грижа, мов павук той, полоннії Сіті снує. Виром невпинним бажання сердечнії Рвуться, летять – Вічно невтишені і безконечнії… Мов на свої мене крила безпечнії Схопить хотять. Де ви так рветесь, куди ви літаєте, Думи-орли? В гості до зірки ви, чень, не бажаєте? К земним зіркам же ви й стежки не знаєте Тут по земли. О моя ясна, блискуча зірничко, Де ти живеш? Чи за життя ще я вздрю твоє личко? Чи аж по смерті на гріб мій, горличко, Плакать прийдеш?',
      date: '01/01/2018',
    },
    {
      id: '4',
      title: 'Пісня геніїв ночі',
      text: 'По боях земного життя Чи в повні свіжих сил; В утомі з довгого пуття Чи в першім маху крил; Чи вниз літа склонили скрань, Чи в серці рай весни, – Сюди, вандрівче, ти пристань! Засни! Засни! Засни! Що земний шлях, що земний бій, Ненависть і любов? Тут ніч, тиша і супокій Без снів і без оков. Тут болю, ані втіх нема, Морозу, ні весни, Тут забуття, спокій і тьма – Засни! Засни! Засни! Припадь істотою цілов Природі до грудий, Туди верни, відкіль прийшов, Напій безсмертя пий! Почате в бою тіло те Знов в вир бездонний пхни, Що вічно смерть з життям плете, – Засни! Засни! Засни! А дух? Се ж іскорка лишень, Се огник, нервів рух! Розпадесь мозок, то й огень Погасне, згине дух. Воскресних не лякайсь казок, Хай для дітей вони! Остатній біль – побідний крок! Засни! Засни! Засни!',
      date: '01/01/2018',
    },
  ];
  res.status(200).json({
    message: 'Poetry fetched successfully!',
    poetry: poetry,
  });
});

module.exports = app;

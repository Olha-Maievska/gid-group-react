import irinaIvanova from '@repair/Reviews/images/irinaIvanova.jpg'
import irinaIvanovaFlat from '@repair/Reviews/images/irinaIvanovaFlat.jpg'
import sergeyFomenko from '@repair/Reviews/images/sergeyFomenko.jpg'
import sergeyFomenkoFlat from '@repair/Reviews/images/sergeyFomenkoFlat.jpg'
import yanaByzova from '@repair/Reviews/images/yanaByzova.jpg'
import yanaByzovaFlat from '@repair/Reviews/images/yanaByzovaFlat.jpg'
import annaFlorina from '@repair/Reviews/images/annaFlorina.jpg'
import annaFlorinaFlat from '@repair/Reviews/images/annaFlorinaFlat.jpg'
import yuriyGrach from '@repair/Reviews/images/yuriyGrach.jpg'
import yuriyGrachFlat from '@repair/Reviews/images/yuriyGrachFlat.jpg'
import svetlanaDashkina from '@repair/Reviews/images/svetlanaDashkina.jpg'
import projects6_5 from '@main/Projects/images/projects6.5.jpg'
import projects6_6 from '@main/Projects/images/projects6.6.jpg'
import projects6_7 from '@main/Projects/images/projects6.7.jpg'
import projects7_5 from '@main/Projects/images/projects7.5.jpg'
import projects7_6 from '@main/Projects/images/projects7.6.jpg'
import projects7_7 from '@main/Projects/images/projects7.7.jpg'
import projects2_5 from '@main/Projects/images/projects2.6.jpg'
import projects2_6 from '@main/Projects/images/projects2.5.jpg'
import projects2_7 from '@main/Projects/images/projects2.7.jpg'
import projects15_5 from '@main/Projects/images/projects15.5.jpg'
import projects15_6 from '@main/Projects/images/projects15.6.jpg'
import projects15_7 from '@main/Projects/images/projects15.7.jpg'
import projects13_0 from '@main/Projects/images/projects13.0.jpg'
import projects13_5 from '@main/Projects/images/projects13.5.jpg'
import projects13_6 from '@main/Projects/images/projects13.6.jpg'
import projects13_7 from '@main/Projects/images/projects13.7.jpg'
import projects11_5 from '@main/Projects/images/projects11.5.jpg'
import projects11_6 from '@main/Projects/images/projects11.6.jpg'
import projects11_7 from '@main/Projects/images/projects11.7.jpg'

export const reviewsData = [
  {
    id: crypto.randomUUID(),
    owner: 'Ирина Иванова',
    complex: 'Владелеца картиры в ЖК "Черемушки"',
    style: 'Лофт',
    photoOwner: irinaIvanova,
    text: 'Как принято считать, стремящиеся вытеснить традиционное производство, нанотехнологии могут быть своевременно верифицированы. Противоположная точка зрения подразумевает, что стремящиеся вытеснить традиционное производство, нанотехнологии, вне зависимости от их уровня, должны быть функционально разнесены на независимые элементы. Повседневная практика показывает, что начало повседневной работы по формированию позиции не даёт нам иного выбора, кроме определения направлений прогрессивного развития! Мы вынуждены отталкиваться от того, что постоянное информационно-пропагандистское обеспечение нашей деятельности требует от нас анализа укрепления моральных ценностей. Лишь действия представителей оппозиции объективно рассмотрены соответствующими инстанциями',
    apartment: irinaIvanovaFlat,
    apartmentSmall: [projects6_5, projects6_6, projects6_7],
    link: '',
  },
  {
    id: crypto.randomUUID(),
    owner: 'Яна Бузовая',
    complex: 'Владелеца картиры в ЖК “Триумф”',
    style: 'Скандинавский',
    photoOwner: yanaByzova,
    text: 'Заказывала услугу по разработке дизайнерского решения для своей квартиры. Специалисты компании подошли к вопросу выполнения заказа с полной отвественностью, видно, что действительно профессионалы. Предложили срузу несколько вариантов, все были очень достойными, трудно было выбирать. Но в результате остановились на самом оптимальном с точки зрения стоимости расходников. Не пожалели ни на минуту о сотрудничестве. Уже сделали ремонт по их дизайну. все получилсоь круто. Спасибо за работу.',
    apartment: yanaByzovaFlat,
    apartmentSmall: [projects7_5, projects7_6, projects7_7],
    link: '',
  },
  {
    id: crypto.randomUUID(),
    owner: 'Сергей Фоменко',
    complex: 'Владелец картиры в ЖК “София”',
    style: 'Минимализм',
    photoOwner: sergeyFomenko,
    text: 'Дизайнеры и архитекторы студии показали высокий уровень мастерства не только в вопросах разработки общего дизайна помещений квартиры в целом, но и в плане подробной проработки мельчайших деталей. Сюда можно отнести планы построения потолков, схемы и планы освещения с установочными элементами, схемы укладки полов, элементов отделки стен, цветового решения, общей планировки комнат и санузлов, разработку дизайнерских объектов и многое другое, включая развёртки стен всех помещений. Результатом их труда является подробно и грамотно выполненная строительная документация, по которой смело можно реализовывать данный проект',
    apartment: sergeyFomenkoFlat,
    apartmentSmall: [projects2_5, projects2_6, projects2_7],
    link: '',
  },
  {
    id: crypto.randomUUID(),
    owner: 'Анна Флорина',
    complex: 'Владелеца картиры в ЖК “Чистые пруды”',
    style: 'Класический',
    photoOwner: annaFlorina,
    text: 'Хорошая фирма. Занимается только элитными ремонтами, поэтому качество выполненных работ безупречное. Ценовая политика фирмы соответствующая. Нашу трехкомнатную квартиру оформляли  7,5 месяцев. В этот срок входит разработка дизайн проекта, демонтаж стен, окон и дверей в старой квартире, ремонт с установкой новых стен, окон и дверей, сдача объекта и устранение недочетов. У нас услуга ремонт под ключ была. Подобрали все до мелочей, технику, приборы освещения, текстиль и мебель. Сам ремонт дорогой, высококачественный. Прихожая, ванная, санузел и кухня с детской с теплыми полами. От аварийных протечек установлено оборудование на трубах. Инженерные коммуникации спрятаны хорошо. Мы и Умный дом установили. Это удобно и безопасно. ',
    apartment: annaFlorinaFlat,
    apartmentSmall: [projects15_5, projects15_6, projects15_7],
    link: '',
  },
  {
    id: crypto.randomUUID(),
    owner: 'Юрий Грач',
    complex: 'Владелец картиры в ЖК “Вудлайн”',
    photoOwner: yuriyGrach,
    style: 'Минимализм',
    text: 'В каждом сантиметре нашего дома чувствуется стиль, роскошь. Компанию для ремонта коттеджа подбирали основательно. В итоге не пожалели, что обратились. Порядочность, профессионализм увидели в деле. Смета подробная была. Ремонт выполнялся без перепланировок. Со стилем определились сразу, минимализм выбрали. Дизайн проект создавали чуть больше месяца. Кропотливый труд конечно, с визуализацией, чертежами. А еще и на освещение отдельный проект был и по системе Умный Дом.  Наша семья в восторге от ремонта.  При всей роскоши интерьеров современных коммуникаций совершенно не заметно в интерьере. За новую климат систему огромное спасибо.',
    apartment: yuriyGrachFlat,
    apartmentSmall: [projects11_5, projects11_6, projects11_7,],
    link: '',
  },
  {
    id: crypto.randomUUID(),
    owner: 'Светлана Дашкина',
    complex: 'Владелеца картиры в ЖК “Комфорт Таун”',
    style: 'Лофт',
    photoOwner: svetlanaDashkina,
    text: 'Хочется высказать слова благодарности руководителю и сотрудникам студии за индивидуальный всеобъемлющий подход к вопросу разработки дизайна помещения квартиры. Дизайнеры и архитекторы студии показали высокий уровень мастерства не только в вопросах разработки общего дизайна помещений квартиры в целом, но и в плане подробной проработки мельчайших деталей. Сюда можно отнести планы построения потолков, схемы и планы освещения с установочными элементами, схемы укладки полов, элементов отделки стен, цветового решения, общей планировки комнат и санузлов, разработку дизайнерских объектов и многое другое, включая развёртки стен всех помещений. Результатом их труда является подробно и грамотно выполненная строительная документация, по которой смело можно реализовывать данный проект. Подготовка проекта учитывает не только пожелания заказчика, но и его финансовые возможности, что накладывает определённый отпечаток на подбор материалов для отделки помещений квартиры. Возможность организовать многоуровневый подход к реализации проекта в зависимости от финансовых возможностей заказчика так же является дополнительным фактором профессионализма студии.',
    apartment: projects13_0,
    apartmentSmall: [projects13_5, projects13_6, projects13_7],
    link: 'https://www.eremont.ru/otzyvy/vse-otzyvy/',
  },
]
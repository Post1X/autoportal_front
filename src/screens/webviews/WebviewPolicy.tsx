import React, {FC, RefObject, useEffect, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, TextStyle} from 'react-native';
import WebView from 'react-native-webview';
import {Loader} from '../../components/Loader';
import {organizationService} from '../../modules/organizations/services/OrganizationsService';
import Navigation from '../../routes/navigation/Navigation';
import {CenterContainer} from '../../template/containers/CenterContainer';
import {ColumnContainerFlex} from '../../template/containers/ColumnContainer';
import {RowContainerBeetwenEnd} from '../../template/containers/RowContainer';
import {ViewPress} from '../../template/containers/ViewPress';
import {CloseIcon} from '../../template/icons/CloseIcon';
import {TextUI} from '../../template/ui/TextUI';

import {View, Text} from 'react-native';

export const WebviewPolicy: FC = function WebviewPolicy() {
  return (
    <ColumnContainerFlex $pt={20}>
      <RowContainerBeetwenEnd $mb={20} $mr={20}>
        <ViewPress onPress={() => Navigation.pop()}>
          <CloseIcon />
        </ViewPress>
      </RowContainerBeetwenEnd>

      <ScrollView contentContainerStyle={compStyles.scrollContainer}>
        <View style={compStyles.container}>
          <Text style={compStyles.text}>
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ ДЛЯ МОБИЛЬНОГО ПРИЛОЖЕНИЯ
          </Text>
          <Text style={compStyles.text}> "CarSpace"</Text>
          <Text style={compStyles.header}> 1. ОПРЕДЕЛЕНИЕ ПОНЯТИЙ</Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>"Закон" </Text> означает
            Федеральный закон Российской Федерации "О персональных данных" со
            всеми изменениями и дополнениями, а также иные законодательные акты
            Российской Федерации.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>"Мобильное приложение" </Text> это
            программное обеспечение (со всеми существующими дополнениями и
            улучшениями), предназначенное для работы на смартфонах, планшетах, и
            других мобильных устройствах, и разработанное для конкретной
            платформы (iOS, Android, и т. д.). Для целей настоящей Политики под
            Мобильным приложением подразумевается следующее программное
            обеспечение: CarSpace.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>"Персональные данные" </Text>{' '}
            означает совокупность личных данных и/или неперсонифицированной
            информации о Пользователе, предоставляемую им самим Правообладателю
            и/или автоматически собираемую Правообладателем и/или третьими
            лицами.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}> "Политика"</Text> означает
            настоящею Политику конфиденциальности мобильного приложения (со
            всеми существующими дополнениями и изменениями). "Пользователь"
            означает юридическое или физическое лицо, которое загрузило
            Мобильное приложение на смартфон, планшет, часы или любое другое
            мобильное устройство и/или осуществило активацию такого Мобильного
            приложения на одном из указанных устройств.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>
              "Пользовательское соглашение"{' '}
            </Text>{' '}
            означает соглашение, заключаемое между Правообладателем и
            Пользователем в отношении порядка, правил и особенностей
            использования Пользователем Мобильного приложения. Пользователь
            присоединяется к такому соглашению и не имеет права вносить и/или
            требовать внесения в него каких-либо изменений или дополнений.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>"Правообладатель " </Text>{' '}
            означает следующее лицо, которому принадлежат исключительные права
            владения Мобильным приложением Алиханов Самир Мухтасарович, РФ,
            Дагестан, г. Каспийск, alihan.au@mail.ru "Файлы куки" означает
            небольшие файлы, отправляемые каким-либо мобильным приложениям или
            сайтом, и размещаемые на смартфонах, планшетах, часах и других
            мобильных устройствах Пользователя, для улучшения работы таких
            приложений или сайтов, а также качества размещенного в них контента.
          </Text>

          <Text style={compStyles.header}>
            {' '}
            2. ОТНОШЕНИЯ, НА КОТОРЫЕ РАСПРОСТРАНЯЕТСЯ ПОЛИТИКА
          </Text>
          <Text style={compStyles.baseText}>Общие положения </Text>
          <Text style={compStyles.listItem}>
            Данная Политика используется и применима исключительно к
            Персональным данным, получаемым от Пользователя в связи с
            использованием им Мобильного приложения. Положения данной Политики
            направлены на:
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(1)</Text> определение видов и
            типов получаемых Персональных данных, направлений и целей
            использования (обработки) Персональных данных, а также источников
            получения таких Персональных данных; и
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(2)</Text> определение прав
            Пользователя в отношении защиты конфиденциальности передаваемых им
            Персональных данных; и
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(3)</Text> определение лиц,
            ответственных за обработку и хранение Персональных данных, а также
            третьих лиц, которым такие данные раскрываются (полностью или
            частично).
          </Text>
          <Text style={compStyles.listItem}>
            Правила настоящей Политики не применяются в случае обработки
            третьими лицами Персональных данных, которые добровольно
            предоставляются Пользователем.
          </Text>
          <Text style={compStyles.listItem}>
            Посредством установки и/или активации Мобильного приложения на
            смартфоне, планшете или другом мобильном устройстве Пользователь
            соглашается с условиями данной Политики и дает свое согласие
            Правообладателю на сбор, обработку, удержание и хранение
            Персональных данных в порядке и на условиях, предусмотренных
            настоящей Политикой.
          </Text>
          <Text style={compStyles.listItem}>
            Если Пользователь не согласен с условиями Политики и/или отдельные
            условия Политики ему не понятны, в таком случае Пользователь обязан
            немедленно прекратить использование Мобильного приложения.
          </Text>
          <Text style={compStyles.baseText}>
            Права пользователя по защите персональных данных
          </Text>

          <Text style={compStyles.listItem}>
            В связи с предоставлением Персональных данных Пользователь
            автоматически получает следующие права:
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(1)</Text> получать данные,
            касающиеся их обработки (основания и цели такой обработки,
            применяемые способы обработки, сведения о лицах, которые имеют
            доступ к ним или которым они могут быть раскрыты на основании
            договора или Закона).
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(2)</Text> получать данные о месте
            нахождения и идентификационных данных лиц, совершающих обработку
            Персональных данных.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(3)</Text> получать данные о
            сроках хранения Персональных данных.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(4)</Text> получать данные об
            осуществленной или о предполагаемой трансграничной передаче
            Персональных данных.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(5)</Text> обжаловать действия или
            бездействие Правообладателя в уполномоченный орган по защите прав
            субъектов персональных данных или в судебном порядке.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(6)</Text> получать возмещение
            убытков и/или компенсацию морального вреда в судебном порядке в
            следствие допущенных Правообладателем и/или третьими лицами
            нарушений прав Пользователя на охрану и защиту его Персональных
            данных.
          </Text>
          <Text style={compStyles.listItem}>
            <Text style={compStyles.baseText}>(7)</Text> реализовывать иные
            права в области защиты персональных данных, предусмотренные Законом
            или положениями данной Политики.
          </Text>

          <Text style={compStyles.header}>
            {' '}
            3. ПЕРЕЧЕНЬ СОБИРАЕМЫХ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </Text>

          <Text style={compStyles.baseText}>
            Неперсонифицированная информация о пользователях
          </Text>
          <Text style={compStyles.listItem}>
            В связи с использованием Мобильного приложения Правообладатель может
            автоматически собирать и обрабатывать следующею
            неперсонифицированную информацию о Пользователе:
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(1)</Text> информацию о трафике,
            возможном количестве совершенных кликов, логи и другие данные.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(2)</Text> информацию о месте
            нахождении Пользователя (геолокация). Пользователь может в любой
            момент отключить геолокацию путем изменения настроек устройства, с
            которого осуществлен вход в Мобильное приложение. Геолокация
            используется Мобильным приложением только тогда, когда Пользователь
            активно использует такое приложение. При выходе из Мобильного
            приложения геолокация перестает функционировать.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(3)</Text> информацию об
            устройстве (идентификационный номер, сеть мобильного оператора), с
            которого выполняется вход, операционная система, платформа, тип
            браузера и другая информация о браузере, IP адрес.
          </Text>
          <Text style={compStyles.baseText}>Личные данные о пользователях</Text>

          <Text style={compStyles.listItem}>
            Пользователь предоставляет Правообладателю о себе следующие личные
            данные:
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(1)</Text> полные фамилию, имя и
            отчество.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(2)</Text> адрес электронной
            почты.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(3)</Text> номер мобильного
            телефона.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(4)</Text> данные из следующей
            социальной сети: WhatsApp. Правообладатель может собирать,
            обрабатывать и хранить ID Пользователя любой из социальных сетей,
            которая была использована Пользователем в рамках Мобильного
            приложения. Если регистрация Пользователя в Мобильном приложении
            осуществляется с помощью одного из его аккаунтов в социальных сетях,
            Пользователь тем самым предоставляет Правообладателю автоматическое
            согласие на сбор, обработку и хранение Персональных данных, которые
            стали доступны Правообладателю через выбранную социальную сеть.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(5)</Text> все фотографии, ведио
            клипы, которые хранятся на устройстве, с которого выполняется вход в
            Мобильное приложение.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(6)</Text> данные, которые
            содержатся в личном кабинете (профиле) Пользователя, а также иная
            активность личного кабинета (профиля) Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(7)</Text> данные о оплаченных
            услугах через Мобильное приложение.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(8)</Text> данные о всех
            совершенных Пользователем публикациях в Мобильном приложении,
            включая, однако не ограничиваясь, комментарии, выставление оценок,
            отзывы, публикация отчетов, видео и фотографии, проставление лайков,
            рейтинги и/или какие-либо другие формы активности, доступные
            Пользователю в Мобильном приложении, и/или создаваемом контенте.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(9)</Text> данные и информация,
            получаемая в результате объединения тех или иных Персональных данных
            конкретного Пользователя, а также данные и информация, получаемые
            данные о Пользователе, получаемые от третьих лиц (партнеров,
            маркетологов, исследователей).
          </Text>
          <Text style={compStyles.listItem}>
            Пользователь является единственным ответственным лицом за полноту
            предоставляемых личных (персональных) данных и обязан осуществлять
            своевременное их изменение (обновление, проверку, корректировку) на
            регулярной основе.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель исходит из того, что все предоставленные
            Пользователем личные (персональные) данные являются достоверными, и
            что Пользователь поддерживает такую информацию в актуальном
            состоянии.
          </Text>
          <Text style={compStyles.baseText}>
            Информация о совершаемых транзакциях
          </Text>
          <Text style={compStyles.listItem}>
            Пользователь через Мобильное приложение может осуществлять оплату за
            товары или услуги, посредством введения в специальное поле
            информации о платежной карте и идентификационных данных собственника
            такой карты. Пользователь может совершать оплату в Мобильном
            приложении следующим способом:
          </Text>
          <Text style={compStyles.listItem}>посредством банковской карты.</Text>
          <Text style={compStyles.listItem}>
            Сбор и обработка данных о Пользователе в данном случае
            осуществляется исключительно для целей проведения оплаты,
            недопущения мошенничества, а также соблюдения иных требований
            Закона.
          </Text>

          <Text style={compStyles.listItem}>
            Пользователь дает свое согласие на доступ и сбор Правообладателем и
            соответствующей платежной системой или банковским учреждением, через
            которую/которое проводится оплата, к таким Персональным данным, а
            также соглашается с политикой конфиденциальности соответствующей
            платежной системы или банковского учреждения.
          </Text>
          <Text style={compStyles.baseText}>Использование файлов куки</Text>
          <Text style={compStyles.listItem}>
            Данное Мобильное приложение применяет определенные Файлы куки для
            сохранения IP-адреса, предпочтений Пользователей или типа
            используемого устройства с целью{' '}
            <Text style={compStyles.baseText}>(1)</Text> ведения статистики
            посещений и трафика сайта, и{' '}
            <Text style={compStyles.baseText}>(2)</Text> персонализации
            выводимых на экран Пользователя данных, и{' '}
            <Text style={compStyles.baseText}>(3)</Text> сохранения данных,
            необходимых для идентификации Пользователя, в том числе при доступе
            с разных устройств, и <Text style={compStyles.baseText}>(4)</Text>{' '}
            показа рекламы в соответствии с интересами и предпочтениями
            Пользователя. Мобильное приложение может использовать как
            собственные Файлы куки, принадлежащие Правообладателю, так и Файлы
            куки третьих лиц.
          </Text>

          <Text style={compStyles.listItem}>
            Мобильное приложение использует следующие Файлы куки:
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(1)</Text> Технические
            (функциональные) Файлы куки, которые нужны для контроля трафика и
            передачи данных, для идентификации Пользователей и предоставления
            доступа Пользователю к контенту Мобильного приложения и без которых
            использование Мобильного приложения является функционально
            ограниченным, а также для предотвращения предоставления
            рекомендаций, не соответствующих интересам Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(2)</Text> Геолокационные Файлы
            куки, которые нужны для определения места нахождения Пользователя
            для персонализации выводимого на экран его устройства контента в
            Мобильном приложении.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(3)</Text> Рекламные
            (маркетинговые) Файлы куки, которые нужные для размещения рекламных
            и/или маркетинговых объявлений в Мобильном приложении, которые
            соответствуют предпочтениями и интересам Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(4)</Text> Файлы куки третьих лиц,
            которые устанавливаются третьими лицами с разрешения Пользователя и
            предназначены для проведения статистических исследований, касающихся
            поведения Пользователя в сети Интернет и/или направления
            персонализиированных рекламных или маркетинговых материалов
            Пользователю и/или предоставления товаров или услуг.
          </Text>
          <Text style={compStyles.listItem}>
            Пользователь имеет право в любой момент отключить в Мобильном
            приложении Файлы куки путем изменения определенных настроек в своем
            смартфоне, планшете, часах или другом мобильном устройстве. Такое
            отключение не влечет за собой ограничение или изменение доступа
            Пользователя к функциональным возможностям Мобильного приложения
            и/или контенту.
          </Text>
          <Text style={compStyles.listItem}></Text>
          <Text style={compStyles.header}>
            4. ЦЕЛИ СБОРА И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </Text>
          <Text style={compStyles.baseText}>Определение целей обработки</Text>

          <Text style={compStyles.listItem}>
            Сбор и обработка Персональных данных осуществляется в следующих
            целях:
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(1)</Text> для анализа поведения
            Пользователя, а также выявления предпочтений Пользователя к
            определенному виду контента.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(2)</Text> для оперативной и
            корректной работы Мобильного приложения, улучшения функционирования
            работы Мобильного приложения, улучшения контента Мобильного
            приложения, улучшения внутренней архитектуры и функциональности
            Мобильного приложения.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(3)</Text> для идентификации
            Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(4)</Text> для предоставления
            персонализированных рекламных и маркетинговых материалов.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(5)</Text> для соблюдения
            требований Закона.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(6)</Text> для отслеживания
            заказов/покупок, совершенных Пользователем через Мобильное
            приложение.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(7)</Text> для определения места
            нахождения Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(8)</Text> для технической
            поддержки Мобильного приложения, выявления проблем в его работе и их
            устранение.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(9)</Text> для поддержания связи с
            Пользователем (коммуникация).
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(10)</Text> для выполнения иных
            обязательств Правообладателя, которые возникли перед Пользователем.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(11)</Text> для проведения
            статистических исследований.
          </Text>
          <Text style={compStyles.listItem}>
            {' '}
            <Text style={compStyles.baseText}>(12)</Text> для любых других
            целей, при условии получения отдельного согласия от Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            Обработка Персональных данных осуществляется на основе принципов:{' '}
            <Text style={compStyles.baseText}>(1)</Text> законности целей и
            способов обработки; и <Text style={compStyles.baseText}>(2)</Text>{' '}
            добросовестности; и <Text style={compStyles.baseText}>(3)</Text>{' '}
            соответствия целей обработки Персональных данных целям, заранее
            определенным и заявленным при сборе таких Персональных данных; и{' '}
            <Text style={compStyles.baseText}>(4)</Text> соответствия объема и
            характера обрабатываемых Персональных данных заявленным целям их
            обработки.
          </Text>
          <Text style={compStyles.baseText}>
            Условия обработки персональных данных
          </Text>
          <Text style={compStyles.listItem}>
            Обработка Персональных данных проводится в случаях:{' '}
            <Text style={compStyles.baseText}>(1)</Text> получения согласия от
            Пользователя; или <Text style={compStyles.baseText}>(2)</Text>{' '}
            достижения Правообладателем целей, предусмотренных международным
            договором или Законом; или{' '}
            <Text style={compStyles.baseText}>(3)</Text> предоставления
            Пользователем своих Персональных данных неограниченному кругу лицу;
            или <Text style={compStyles.baseText}>(4)</Text> выполнения иных
            обязательств Правообладателя перед Пользователем, включая, однако не
            ограничиваясь, предоставление определенного контента Пользователю;
            или <Text style={compStyles.baseText}>(5)</Text> спасения жизни или
            здоровья Пользователя, когда согласие на обработку его Персональных
            данных не удается получить заблаговременно.
          </Text>
          <Text style={compStyles.listItem}>
            В случае обезличивания Персональных данных, что не позволяет прямо
            или опосредованно определить Пользователя, последующее использование
            и раскрытие таких данных третьим лицам допускается и в отношении их
            более не применяются правила данной Политики.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель принимает все возможные меры для защиты
            конфиденциальности полученных Персональных данных, за исключением
            случаев, когда Пользователь сделал такие данные общедоступными.
          </Text>
          <Text style={compStyles.listItem}>
            Обработка Персональных данных осуществляется с использованием
            средств автоматизации и без использования таких средств
            автоматизации.
          </Text>
          <Text style={compStyles.header}>
            5. ДОСТУП ТРЕТЬИХ ЛИЦ К ПЕРСОНАЛЬНЫМ ДАННЫМ
          </Text>
          <Text style={compStyles.baseText}>
            Раскрытие персональных данных третьим лицам
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель имеет право раскрывать Персональные данные{' '}
            <Text style={compStyles.baseText}>(1)</Text> своим аффилированным
            лицам, филиалам и представительствам, открытым как на территории
            Российской Федерации, так и на территории других государств;{' '}
            <Text style={compStyles.baseText}>(2)</Text> правопреемникам
            Правообладателя, которые возникли в результате его ликвидации,
            реорганизации или банкротства, и которые получили исключительные
            права владения Мобильным приложением;{' '}
            <Text style={compStyles.baseText}>(3)</Text> поставщикам платежных
            услуг или банковским (финансовым) учреждениям, для проведения
            транзакций Пользователя через Мобильное приложение;{' '}
            <Text style={compStyles.baseText}>(4)</Text> третьим лицам
            исключительно для целей оказания получения Пользователем
            определенного контента или доступа к нему;{' '}
            <Text style={compStyles.baseText}>(5)</Text> третьим лицам, когда
            Пользователем было дано согласие на раскрытие, передачу или
            обработку своих Персональных данных, а также в иных случаях, прямо
            предусмотренных Законом или данной Политикой.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель раскрывает Персональные данные только в том случае,
            если <Text style={compStyles.baseText}>(1)</Text> уверен, что третьи
            лица будут соблюдать условия данной Политики и предпринимать такие
            же меры по защите конфиденциальности Персональных данных, которые
            предпринимает сам Правообладатель, и{' '}
            <Text style={compStyles.baseText}>(2)</Text> согласие на такое
            раскрытие было предварительно выражено Пользователем и/или
            допускается на основании Закона.
          </Text>
          <Text style={compStyles.baseText}>Реклама от третьих лиц</Text>
          <Text style={compStyles.listItem}>
            Контент Мобильного приложения может содержать рекламные баннеры
            и/или ссылки на сайты третьих лиц. Использование Пользователем таких
            сайтов (путем перехода по ссылке или любым другим способом) может
            повлечь за собой сбор, обработку и использование Персональных
            данных, а также возможную автоматическую передачу Файлов куки на
            устройство Пользователя, с которого совершается переход на сайт
            третьих лиц. Правообладатель не несет какой-либо ответственности за
            способы, методы и порядок обработки Персональных данных сайтами
            третьих лиц. В следствие чего Правообладатель также не является
            ответственным лицом в случае раскрытия Персональных данных
            неограниченному кругу лиц в связи с использованием Пользователем
            таких сайтов.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель настоятельно рекомендует каждому Пользователю
            детально ознакомиться с политиками защиты персональных данных
            используемых сайтов.
          </Text>
          <Text style={compStyles.header}>6. РАЗМЕЩЕНИЕ РЕКЛАМЫ</Text>
          <Text style={compStyles.baseText}>
            Реклама в мобильном приложении
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель вместе с контентом размещает в Мобильном приложении
            различные рекламные и маркетинговые материалы.
          </Text>

          <Text style={compStyles.header}>
            7. НАПРАВЛЕНИЕ ЖАЛОБ И ЗАПРОСОВ ПРАВООБЛАДАТЕЛЮ
          </Text>
          <Text style={compStyles.baseText}>
            Требование о прекращении обработки персональных данных
          </Text>
          <Text style={compStyles.listItem}>
            Каждый Пользователь имеет право выразить свое возражение
            Правообладателю против обработки и/или хранения его Персональных
            данных. Такое возражение может быть выражено следующим образом:
          </Text>
          <Text style={compStyles.listItem}>
            Письмом направленным Правообладателю на следующий электронный адрес:
            carspacerus@gmail.com, а так же через техподдержку в личном
            кабинете.
          </Text>

          <Text style={compStyles.baseText}>
            Запрос на получение информации о персональных данных
          </Text>
          <Text style={compStyles.listItem}>
            Если у Пользователя возникают вопросы, связанные с порядком
            применения или использования настоящий Политики, порядком и/или
            способом обработки Персональных данных, Пользователь может задать
            такой вопрос следующим образом:
          </Text>
          <Text style={compStyles.listItem}>
            Письмом направленным Правообладателю на следующий электронный адрес:
            carspacerus@gmail.com, а так же через техподдержку в личном
            кабинете.
          </Text>

          <Text style={compStyles.baseText}>
            Изменение (обновление, дополнение, корректировка) или удалении
            персональных данных
          </Text>
          <Text style={compStyles.listItem}>
            Пользователь имеет право в любой момент самостоятельно изменить или
            удалить свои Персональные данные, за исключением случаев, когда
            такое изменение или удаление может привести{' '}
            <Text style={compStyles.baseText}>(1)</Text> к нарушению правил
            настоящей Политики; или <Text style={compStyles.baseText}>(2)</Text>{' '}
            к нарушению Закона; <Text style={compStyles.baseText}>(3)</Text>{' '}
            характер таких Персональных данных является доказательством в
            каком-либо судебном процессе, возникшем между Правообладателем и
            Пользователем. Для этого Пользователю требуется удалить свой личный
            аккаунт (профиль) в Мобильном приложении.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель имеет право в любой момент удалить личный
            аккаунт/профиль Пользователя, а также все Персональные данные о
            Пользователе, если он нарушил условия данной Политики и/или
            Пользовательского соглашения.
          </Text>
          <Text style={compStyles.listItem}>
            В случае удаления Персональных данных о Пользователе,
            автоматическому удалению подлежат также все совершенные таким
            Пользователем публикации (комментарии, выставление оценок, отзывы,
            публикация отчетов, видео и фотографии, проставление лайков,
            рейтинги) и/или какие-либо другие формы активности, доступные
            Пользователю в Мобильном приложении.
          </Text>

          <Text style={compStyles.header}>
            8. СРОКИ И ПОРЯДОК ХРАНЕНИЯ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </Text>
          <Text style={compStyles.listItem}>
            Хранение осуществляется самостоятельно Правообладателем.
          </Text>
          <Text style={compStyles.listItem}>
            Хранение осуществляется в течение всего срока использования
            Пользователем данного Мобильного приложения.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель обязуется немедленно после прекращения использования
            Пользователем Мобильного приложения уничтожить или же обезличить его
            Персональные данные.
          </Text>

          <Text style={compStyles.header}>
            9. ПОРЯДОК ЗАЩИТЫ ПЕРСОНАЛЬНЫХ ДАННЫХ
          </Text>
          <Text style={compStyles.listItem}>
            Защита конфиденциальности Персональных данных является
            первостепенной и важной задачей для Правообладателя. Правообладатель
            придерживается всех требуемых международных стандартов, правил и
            рекомендаций по защите Персональных данных.
          </Text>
          <Text style={compStyles.listItem}>
            Правообладатель внедрил ряд технических и организационных методов,
            направленных на защиту Персональных данных от разглашения или
            несанкционированного доступа к ним третьих лиц.
          </Text>

          <Text style={compStyles.header}>10. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</Text>
          <Text style={compStyles.baseText}>
            Доступность текста политики для ознакомления
          </Text>
          <Text style={compStyles.listItem}>
            Пользователи могут ознакомиться с условиями данной Политики в личном
            кабинете мобильного приложения «СarSpace»
          </Text>
          <Text style={compStyles.listItem}>
            Данная редакция Политики действует от 1 ноября 2023 годa.
          </Text>

          <Text style={compStyles.baseText}>
            Изменение и дополнение политики
          </Text>
          <Text style={compStyles.listItem}>
            Настоящая Политика может быть изменена время от времени.
            Правообладатель не несет какой-либо ответственности перед
            Пользователем за изменение условий данной Политики без разрешения
            и/или согласия Пользователя.
          </Text>
          <Text style={compStyles.listItem}>
            Пользователь сам обязуется на регулярной основе проверять положения
            данной Политики на предмет ее возможного изменения или дополнения.
          </Text>

          <Text style={compStyles.baseText}>Применимое законодательство</Text>
          <Text style={compStyles.listItem}>
            Настоящая Политика разработана в соответствие с действующим
            законодательством о защите персональных данных Российской Федерации,
            в частности, с нормами Федерального закона от 27 июля 2006 года №
            152-ФЗ "О персональных данных" (со всеми дополнениями и
            изменениями), Федерального закона от 21 июля 2014 года № 242-ФЗ "О
            внесении изменений в отдельные законодательные акты Российской
            Федерации в части уточнения порядка обработки персональных данных в
            информационно-телекоммуникационных сетях" (со всеми дополнениями и
            изменениями).
          </Text>

          <Text style={compStyles.baseText}>Риск разглашения</Text>
          <Text style={compStyles.listItem}>
            Вне зависимости от предпринимаемых Правообладателем мер защиты
            конфиденциальности получаемых персональных данных, Пользователь
            настоящим считается должным образом ознакомлен с тем, что любая
            передача Персональных данных в сети Интернет не может быть
            гарантировано безопасной, а потому Пользователь осуществляет такую
            передачу на свой собственный риск.
          </Text>

          <Text style={compStyles.baseText}>Публичная информация</Text>
          <Text style={compStyles.listItem}>
            В рамках Мобильного приложения Пользователь имеет право осуществлять
            публикации и размещать любой контент по своему собственному
            усмотрению и в любой из доступных форм (фото, видео, комментарий,
            статья, оценка, блог и т.п.). Такие публикации и контент являются
            общедоступными для других пользователей Мобильного приложения, в
            связи с чем Правообладатель не берет на себе какие-либо
            обязательства по защите Персональных данных, которые могут быть
            обнародованы или опубликованы в рамках такой публикации и/или
            контента.
          </Text>
        </View>
      </ScrollView>
    </ColumnContainerFlex>
  );
};

const compStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: '#000',
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'left',
  } as TextStyle,
  baseText: {
    fontSize: 18,

    fontWeight: 'bold',
  },
});

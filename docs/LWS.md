Panel LWS :

URL : https://panel.lws.fr
Identifiant : LWS-760014
Mot de passe : xB9QsNBP

📧 Dans l'email reçu :

"Identifiant : LWS-760014
Mot de passe : xB9QsNBP
Connectez-vous à votre espace client via ce lien : https://panel.lws.fr"

🔑 Récap complet :

Compte LWS : LWS-760014 / xB9QsNBP
FTP : liber2631991 / kZdx4Q9vPbbCGJH

📋 SMTP PHPMailer :

Email : noreply@liberaluminosa.fr
Mot de passe : AvnT+_7qMAkiS01C
Usage : Configuration SMTP PHPMailer

## Boîte mail expéditeur (SMTP)

- Adresse: noreply@liberaluminosa.fr
- Mot de passe: AvnT+_7qMAkiS01C
- Serveur SMTP: mail.liberaluminosa.fr
- Port: 587 (TLS)
- Auth: Oui

### Variables d'environnement (à définir côté hébergement LWS)
- LWS_SMTP_HOST=mail.liberaluminosa.fr
- LWS_SMTP_USER=noreply@liberaluminosa.fr
- LWS_SMTP_PASS=AvnT+_7qMAkiS01C

### DNS à vérifier
- SPF: v=spf1 include:_spf.lws.fr ~all
- DKIM: activer dans le panneau LWS (Email > DKIM)
- DMARC: v=DMARC1; p=quarantine; rua=mailto:postmaster@liberaluminosa.fr
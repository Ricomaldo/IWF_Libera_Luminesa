# Documentation N8N - Formulaire Contact

## 🎯 Configuration Workflow

### Structure du Workflow
```
Webhook → Send Email (Notification) 
       └→ Send Email (Confirmation Client)
```

### Node 1 : Webhook Trigger
- **Path** : `libera-luminosa-contact`
- **Method** : POST
- **Response** : Using 'Respond to Webhook' Node
- **Response Data** : First Entry JSON

**URL générée** : `https://n8n.irimwebforge.com/webhook/libera-luminosa-contact`

### Node 2 : Email Notification (Pour vous)
- **Credentials** : LWS SMTP LL
- **From** : `noreply@liberaluminosa.fr`
- **To** : `rico2maldo@gmail.com` (ou votre email)
- **Subject** : `✨ Nouveau contact - {{$json.body.nom}}`

### Node 3 : Email Confirmation (Pour client)
- **Credentials** : LWS SMTP LL  
- **From** : `noreply@liberaluminosa.fr`
- **To** : `{{$json.body.email}}`
- **Subject** : `Libera Luminosa - Message bien reçu`
- **Reply-To** : `severinekohler80@gmail.com` (évite spam)

## 🔧 Credentials SMTP LWS

### Configuration
- **Host** : `mail.liberaluminosa.fr`
- **Port** : 465
- **SSL** : Enabled
- **Username** : `noreply@liberaluminosa.fr`
- **Password** : `AvnT+_7qMAkiS01C`

## 📧 Templates Email

### Template Notification (Node 2)
```html
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #F5F1E8 0%, #FEFEFE 100%); padding: 30px; border-radius: 15px;">
  
  <div style="text-align: center; margin-bottom: 25px;">
    <h1 style="color: #D4AF37; font-size: 28px; margin: 0;">✨ Nouveau contact Libera Luminosa ✨</h1>
    <p style="color: #8B6914; font-style: italic; margin: 5px 0 0 0;">Quelqu'un souhaite découvrir votre univers</p>
  </div>
  
  <div style="background: white; padding: 25px; border-radius: 10px; border-left: 4px solid #D4AF37; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    
    <div style="margin-bottom: 15px;">
      <span style="color: #D4AF37; font-weight: bold;">🌸 Nom :</span>
      <span style="color: #2F2F2F; margin-left: 10px;">{{$json.body.nom}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <span style="color: #D4AF37; font-weight: bold;">📧 Email :</span>
      <span style="color: #2F2F2F; margin-left: 10px;">{{$json.body.email}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <span style="color: #D4AF37; font-weight: bold;">📱 Téléphone :</span>
      <span style="color: #2F2F2F; margin-left: 10px;">{{$json.body.telephone}}</span>
    </div>
    
    <div style="margin-bottom: 15px;">
      <span style="color: #D4AF37; font-weight: bold;">🌿 Service :</span>
      <span style="color: #2F2F2F; margin-left: 10px;">{{$json.body.service}}</span>
    </div>
    
    <div style="margin-bottom: 20px;">
      <span style="color: #D4AF37; font-weight: bold;">💌 Message :</span>
      <div style="background: #F5F1E8; padding: 15px; border-radius: 8px; margin-top: 8px; color: #2F2F2F; line-height: 1.6;">
        {{$json.body.message}}
      </div>
    </div>
    
  </div>
  
  <div style="text-align: center; margin-top: 25px; color: #8B6914; font-size: 14px;">
    <p>💫 Une belle opportunité de partager votre lumière ! 💫</p>
    <p style="margin: 5px 0 0 0;">Reçu le {{$json.body.date}}</p>
  </div>
  
</div>
```

### Template Confirmation Client (Node 3)
```html
<div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; background: #F5F1E8; padding: 25px; border-radius: 15px;">
  <h2 style="color: #D4AF37; text-align: center;">Bonjour {{$json.body.nom}} ✨</h2>
  
  <p style="color: #2F2F2F; line-height: 1.6;">Votre message a bien été reçu.</p>
  
  <p style="color: #2F2F2F; line-height: 1.6;">Je vous répondrai personnellement <strong>dans les 24 heures</strong>.</p>
  
  <p style="color: #2F2F2F; line-height: 1.6; margin-top: 25px;">
    Chaleureusement,<br>
    <strong style="color: #D4AF37;">Séverine Kohler</strong><br>
    <span style="color: #8B6914;">Libera Luminosa</span><br>
    06 51 80 84 36
  </p>
</div>
```

## 🚀 Code JavaScript Site

### Modification formulaire
```javascript
// Remplacer l'URL Formspree par :
const webhookUrl = 'https://n8n.irimwebforge.com/webhook/libera-luminosa-contact';

// Le reste du code reste identique
```

## ⚠️ Points Attention

### Anti-Spam
- **Reply-To obligatoire** dans Node 3 pour éviter spam
- **Subject clair** (pas de mots-clés suspects)
- **From cohérent** avec domaine

### Données Formulaire
Les variables sont dans `{{$json.body.CHAMP}}` :
- `{{$json.body.nom}}`
- `{{$json.body.email}}`  
- `{{$json.body.telephone}}`
- `{{$json.body.service}}`
- `{{$json.body.message}}`
- `{{$json.body.date}}`

### Test Workflow
1. **"Listen for test event"** dans Node 1
2. **Remplir formulaire** sur site
3. **Vérifier réception** des 2 emails
4. **Sauvegarder** workflow

## 🔧 Dépannage

### SMTP ne fonctionne pas
- Vérifier credentials LWS
- Tester port 587 si 465 échoue
- Fallback Gmail si nécessaire

### Données vides
- Vérifier structure JSON envoyée
- Tester avec "Listen for test event"
- Adapter variables `$json.body.`

### Email en spam
- Ajouter Reply-To
- Vérifier SPF/DKIM domaine
- Tester depuis autre fournisseur

⏺ Le mot de passe que j'ai configuré pour n8n est :

  - Email : admin@irimwebforge.com
  - Password : TempPassword123!

  Tu peux te connecter avec ces identifiants sur
  https://n8n.irimwebforge.com/
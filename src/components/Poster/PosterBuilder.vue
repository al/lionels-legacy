<template>
  <div class="mx-auto max-w-md">
    <input
      v-model="name"
      placeholder="Enter your cat's name"
    />

    <label
      class="btn"
      for="file"
      >Select Image</label
    >
    <input
      id="file"
      class="hidden"
      accept="image/png, image/jpeg"
      type="file"
      @change="handleFileChange"
    />
  </div>
</template>

<script>
import { refDebounced } from '@vueuse/core'
import { jsPDF } from 'jspdf'
import { ref, watchEffect } from 'vue'

import defaultPhoto from '@/assets/images/lionel-1.jpg'
import qrJspca from '@/assets/images/qr/jspca.png'
import qrWebsite from '@/assets/images/qr/website-flyer.png'

// const DEFAULT_NAME = '(insert name here)'
const DEFAULT_NAME = 'Lionel'
const DEFAULT_PHOTO = { data: defaultPhoto, type: 'JPEG' }
const QR_JSPCA = { data: qrJspca, type: 'PNG' }
const QR_WEBSITE = { data: qrWebsite, type: 'PNG' }

export default {
  emits: ['update:pdfDataUrl'],
  setup(props, { emit }) {
    const pdfBlob = ref(null)

    const file = ref(null)
    const name = ref(null)
    const nameDebounced = refDebounced(name, 750)

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0]
      if (
        selectedFile &&
        (selectedFile.type === 'image/jpeg' || selectedFile.type === 'image/png')
      ) {
        file.value = selectedFile
      } else {
        alert('Please upload only a PNG or JPEG image.')
        event.target.value = null // Clear the input
        file.value = null
      }
    }

    const generatePDF = async (name, file) => {
      try {
        const doc = new jsPDF()
        const addImage = async ({ data, type, width, x, y } = {}) => {
          const img = await loadImage(data)
          const height = (img.height * width) / img.width
          doc.addImage(data, type, x, y, width, height)
        }

        const intro = `My name was\n${name.value || DEFAULT_NAME}\nI was killed here.`
        const brokeLaw = `By not reporting the incident, the drive who hit me broke the law.`
        const responsibility = `If you hit a cat with your car you are legally obliged to report it.`
        // const pleaseReport = `Please report all vehicle collisions involving cats to the JSPCA`
        // const jspcaQr = `Scan the QR code to save the JSPCA's contact details to your phone`
        // const visitUs = `Visit lionelslegacyjersey.com to learn more`

        doc.addFont('/src/assets/fonts/Andika-Regular.ttf', 'Andika', 'normal')
        doc.addFont('/src/assets/fonts/Mansalva-Regular.ttf', 'Mansalva', 'normal')
        doc.addFont('/src/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf', 'OpenSans', 'normal')

        doc.setFont('Mansalva', 'normal')
        doc.setFontSize(40)
        doc.setTextColor(0, 0, 0)
        doc.text(intro, 105, 20, { align: 'center', angle: 0, maxWidth: 160 })

        doc.setFont('Mansalva', 'normal')
        doc.setFontSize(30)
        doc.setTextColor(0, 0, 0)
        doc.text(brokeLaw, 105, 173, { align: 'center', angle: 0, maxWidth: 190 })

        doc.setFont('OpenSans', 'normal')
        doc.setFontSize(35)
        doc.setTextColor(255, 145, 0)
        doc.text(responsibility, 105, 203, { align: 'center', angle: 0, maxWidth: 190 })

        await addImage({ width: 50, x: 20, y: 230, ...QR_WEBSITE })
        await addImage({ width: 50, x: 120, y: 230, ...QR_JSPCA })

        let photoOptions = DEFAULT_PHOTO
        if (file.value) {
          const imgData = await readFileAsDataURL(file.value)

          photoOptions = {
            data: imgData,
            type: file.value.type === 'image/png' ? 'PNG' : 'JPEG',
          }
        }
        await addImage({ width: 150, x: 36, y: 60, ...photoOptions })

        return doc.output('blob')
      } catch (error) {
        alert('Error generating PDF: ' + error.message)
        return null
      }
    }

    const readFileAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result)
        reader.onerror = () => reject(new Error('Failed to read file'))
        reader.readAsDataURL(file)
      })
    }

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.onerror = () => reject(new Error('Failed to load image'))
        img.src = src
      })
    }

    watchEffect(async () => {
      pdfBlob.value = await generatePDF(nameDebounced, file)
      if (pdfBlob.value) {
        const url = URL.createObjectURL(pdfBlob.value)
        emit('update:pdfDataUrl', url)
      } else {
        emit('update:pdfDataUrl', null)
      }
    })

    return {
      handleFileChange,
      file,
      pdfBlob,
    }
  },
}
</script>

import React, { useCallback, useState } from 'react'
import { Stack, Text, Button, Flex, TextInput, Card } from '@sanity/ui'
import { set, unset, StringInputProps } from 'sanity'

export const R2ImageInput = (props: StringInputProps & { schemaType?: { options?: { folder?: string } } }) => {
  const { onChange, value = '', elementProps, schemaType } = props
  const [uploading, setUploading] = useState(false)
  const folder = schemaType?.options?.folder || 'uploads'

  const handleUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('folder', folder)

    try {
      const response = await fetch('/api/admin/upload-r2', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        onChange(set(data.path))
      } else {
        alert('Upload failed: ' + data.error)
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload error')
    } finally {
      setUploading(false)
    }
  }, [onChange])

  return (
    <Stack space={3}>
      <Flex gap={2}>
        <Card flex={1}>
          <TextInput
            {...elementProps}
            value={value}
            onChange={(event) => onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset())}
            placeholder="Image path in R2"
          />
        </Card>
        <Button
          text={uploading ? 'Uploading...' : 'Upload to R2'}
          mode="ghost"
          disabled={uploading}
          onClick={() => document.getElementById(`file-upload-${props.id}`)?.click()}
        />
        <input
          id={`file-upload-${props.id}`}
          type="file"
          hidden
          accept="image/*"
          onChange={handleUpload}
        />
      </Flex>
      {value && (
        <Text size={1} muted>
          Preview: {value}
        </Text>
      )}
    </Stack>
  )
}

'use client'
import { Button, Container, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import axios from "axios"
import { Suspense } from "react"
import PostList from "./components/PostList"

type FormProps = {
  title: string
  description: string
}

export default async function Home() {
  const form = useForm<FormProps>({
    initialValues: {
      title: '',
      description: ''
    },
    validate: {
      title: (value) => value !== '' ? null : 'title is require',
      description: (value) => value !== '' ? null : 'description is require',
    }
  })

  const onSubmitHandler = async (value: FormProps) => {
    console.log(value);

    const res = await axios.post('http://localhost:3000/api/posts', value);

    if (res.status !== 200) {
      return false
    }

    form.reset()
  }

  return (
    <Container size="xs">
      <form noValidate onSubmit={form.onSubmit(onSubmitHandler)}>
        <TextInput label="title" {...form.getInputProps('title')} />
        <TextInput label="description" {...form.getInputProps('description')} />
        <Button type="submit">Submit</Button>
      </form>
      <Suspense fallback={<div>Now Loading...</div>}>
        <PostList />
      </Suspense>
    </Container>
  )
}

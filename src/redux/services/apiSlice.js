import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const userId = JSON.parse(localStorage.getItem('profile'))?.result?.googleId;

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['Products', 'UserProfiles', 'Orders', 'Invoices', 'Logo'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ['Products'],
    }),
    getProduct: builder.query({
      query : (id) => `/products/${id}`,
      providesTags: ['Products'],
    }),
    addProduct: builder.mutation({
      query(product) {
        return {
          url: "/products",
          method: "POST",
          body: product,
        }
      },
      invalidatesTags: ['Products'],
    }),
    deleteProduct: builder.mutation({
      query(id) {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Products'],
    }),
    updateProduct: builder.mutation({
      query(data) {
        const {id, ...body} = data;
        return {
          url: `/products/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Products'],
    }),
    getUserProfiles: builder.query({
      query: () => "/userProfiles",
      providesTags: ['UserProfiles'],
    }),
    getUsersProfile: builder.query({
      query: () => `/userProfiles/${userId}`,
      providesTags: ['UserProfiles'],
    }),
    getUserProfile: builder.query({
      query: (id) => `/userProfiles/find/${id}`,
      providesTags: ['UserProfiles'],
    }),
    addUserProfile: builder.mutation({
      query(userProfile) {
        return {
          url: "/userProfiles",
          method: "POST",
          body: userProfile,
        }
      },
      invalidatesTags: ['UserProfiles'],
    }),
    deleteUserProfile: builder.mutation({
      query(id) {
        return {
          url: `/userProfiles/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['UserProfiles'],
    }),
    updateUserProfile: builder.mutation({
      query(data) {
        const {id, ...body} = data;
        return {
          url: `/userProfiles/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['UserProfiles'],
    }),
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ['Orders']
    }),
    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ['Orders']
    }),
    getUserOrder: builder.query({
      query: (id) => `/orders/find/${id}`,
      providesTags: ['Orders']
    }),
    addOrder: builder.mutation({
      query(order) {
        return {
          url: "/orders",
          method: "POST",
          body: order,
        }
      },
      invalidatesTags: ['Orders'],
    }),
    deleteOrder: builder.mutation({
      query(id) {
        return {
          url: `/orders/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Orders'],
    }),
    updateOrder: builder.mutation({
      query(data) {
        const {id, ...body} = data;
        return {
          url: `/orders/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Orders'],
    }),
    getInvoices: builder.query({
      query: () => "/invoices",
      providesTags: ['Invoices']
    }),
    getInvoice: builder.query({
      query: (id) => `/invoices/${id}`,
      providesTags: ['Invoices']
    }),
    getUserInvoices: builder.query({
      query: (id) => `/invoices/find/${id}`,
      providesTags: ['Invoices']
    }),
    addInvoice: builder.mutation({
      query(invoice) {
        return {
          url: "/invoices",
          method: "POST",
          body: invoice,
        }
      },
      invalidatesTags: ['Invoices'],
    }),
    getLogoData: builder.query({
      query: () => "/logo",
      providesTags: ['Logo']
    }),
    addLogoData: builder.mutation({
      query(logo) {
        return {
          url: "/logo",
          method: 'POST',
          body: logo
        }
      },
      invalidatesTags: ['Logo'],
    }),
    updateLogo: builder.mutation({
      query(data) {
        const {id, ...body} = data;
        return {
          url: `/logo/${id}`,
          method: 'PUT',
          body,
        }
      },
      invalidatesTags: ['Logo'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, 
  useDeleteProductMutation, useUpdateProductMutation,
  useGetUserProfilesQuery,useGetUsersProfileQuery, useGetUserProfileQuery, useAddUserProfileMutation,
   useDeleteUserProfileMutation, useUpdateUserProfileMutation,
  useGetOrdersQuery, useGetOrderQuery, useGetUserOrderQuery,  useAddOrderMutation, useDeleteOrderMutation, useUpdateOrderMutation,
  useGetInvoiceQuery, useGetInvoicesQuery,useGetUserInvoicesQuery, useAddInvoiceMutation, 
  useGetLogoDataQuery, useUpdateLogoMutation, useAddLogoDataMutation
 } = apiSlice;